import { test, expect } from '@playwright/test'

test('testing the calculation of the total', async ({ page }) => {
  await page.goto('http://localhost:5173/new_offer')
  await page.getByLabel('Quantity:').click({
    clickCount: 3
  })
  await page.getByLabel('Quantity:').click()
  await page.getByLabel('Quantity:').fill('039')
  await page.getByRole('button', { name: 'Add Discount' }).click()
  await page.getByRole('spinbutton', { name: 'Discount:' }).fill('21')
  await page.getByLabel('Price/unit (USD):').click()
  await page.getByLabel('Price/unit (USD):').fill('89')
  await page.getByRole('spinbutton', { name: 'Discount:' }).click()
  await page.getByRole('spinbutton', { name: 'Discount:' }).fill('12')
  await page.getByRole('button', { name: 'Add Product' }).click()
  await page.getByLabel('Quantity:').nth(1).dblclick()
  await page.getByLabel('Price/unit (USD):').nth(1).dblclick()
  await page.getByLabel('Price/unit (USD):').nth(1).dblclick()
  await page.getByLabel('Price/unit (USD):').nth(1).fill('07')
  await page.getByRole('button', { name: 'Add Discount' }).click()
  await page.locator('#discount-1-0').click()
  await page.locator('#discount-1-0').fill('8')
  await page.getByRole('heading', { name: 'Total: 3054 USD' }).click()
  const totalText = await page.textContent('text=Total: 3054 USD')
  expect(totalText).toBe('Total: 3054 USD')
})
