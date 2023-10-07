import { test, expect } from '@playwright/test'

test('checking the hidden T', async ({ page }) => {
  await page.goto('http://localhost:5173/new_offer')
  await page.getByRole('link', { name: 'Create a new offer' }).click()
  await page.getByLabel('Price/unit (USD):').click({
    clickCount: 3
  })
  await page.getByLabel('Price/unit (USD):').click()
  await page.getByLabel('Price/unit (USD):').fill('023')
  await page.getByLabel('Quantity:').click()
  await page.getByLabel('Quantity:').fill('6')
  await page.getByRole('button', { name: 'Add tier' }).click()
  await page.getByRole('button', { name: 'Add Product' }).click()
  await page
    .getByLabel(
      'Select a ProductResidential ProxiesData Center proxiesDedicated Data Center ProxiesSite UnblockerE-commerce APIWeb Scraping APISocial Media API'
    )
    .nth(1)
    .selectOption('Web Scraping API')
  await page.getByLabel('Price/unit (USD):').nth(2).dblclick()
  await page.getByLabel('Price/unit (USD):').nth(2).click()
  await page.getByLabel('Price/unit (USD):').nth(2).click()
  await page.getByLabel('Price/unit (USD):').nth(2).fill('9')
  await page.getByLabel('Quantity:').nth(2).click()
  await page.getByLabel('Quantity:').nth(2).fill('8')
  const isTotalVisible = await page.locator('text=Total:').isVisible()
  expect(isTotalVisible).toBe(false)
})
