// @ts-check
import { test, expect } from '@playwright/test';

const URL = 'http://localhost:8080/';

test.describe.configure({mode: 'parallel'});

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
})

test('has counter', {
  annotation: {
    type: 'unit',
  }
}, async ({ page }) => {
  // Check if the counter display element is present
  const counterDisplay = await page.$('#counter-display');
  expect(counterDisplay).not.toBeNull();
});

test('check counting reaching end value', {
  annotation: {
    type: 'e2e',
  }
},async ({ page }) => {
  // Get the initial counter value
  const counterDisplay = await page.$('#counter-display');
  const counterValue = await counterDisplay?.innerText();
  expect(counterValue).toBe('0');

  // Click the increment button 10 times
  for (let i = 0; i < 5; i++) {
    await page.click('#increment-button');
  }

  // Check if the counter value is 5
  expect(await counterDisplay?.innerText()).toBe('5');
  // check for message display
  const messageDisplay = await page.$('#message-display');
  expect(messageDisplay).not.toBeNull();
});

test('check appearance of success message', {
  annotation: {
    type: 'e2e',
    description: 'e2e with snapshot'
  }
},async ({ page }) => {
  await expect(page).toHaveScreenshot()
});
