import { test, expect } from '@playwright/test'

test('check if the bundle total in visible when it needs to be (after giving a % of discount)', async ({
  page
}) => {
  await page.goto('http://localhost:5173/new_offer')
  await page.getByRole('link', { name: 'Create a new offer' }).click()
  await page.getByRole('button', { name: 'Add Discount' }).click()
  await page.getByRole('spinbutton', { name: 'Discount:' }).click()
  await page.getByRole('spinbutton', { name: 'Discount:' }).fill('9')
  await page.getByLabel('Quantity:').click()
  await page.getByLabel('Quantity:').fill('9')
  await page.getByLabel('Price/unit (USD):').click()
  await page.getByLabel('Price/unit (USD):').fill('7')
  await page.locator('#bundle-discount').check()
  await page.getByRole('button', { name: 'Add Product' }).click()
  await page.getByRole('button', { name: 'Add Product' }).click()
  const isTotalVisible = await page.locator('text=Total (').isVisible()
  expect(isTotalVisible).toBe(true)
})
