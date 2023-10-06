import { test, expect } from '@playwright/test'

async function countTheOffers(page: any): Promise<any> {
  return await page.evaluate(() => {
    let count = 0
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith('pdf')) {
        count++
      }
    }
    return count
  })
}

test('Counting th COs (if they are being added to the gallery)', async ({ page }) => {
  await page.goto('http://localhost:5173/new_offer')
  const numberOfOffers = await countTheOffers(page)
  await page
    .getByLabel(
      'Select a ProductResidential ProxiesData Center proxiesDedicated Data Center ProxiesSite UnblockerE-commerce APIWeb Scraping APISocial Media API'
    )
    .selectOption('E-commerce API')
  await page.getByRole('button', { name: 'Add Discount' }).click()
  await page.getByRole('button', { name: 'Remove Discount' }).click()
  await page.getByRole('button', { name: 'Add Discount' }).click()
  await page.getByLabel('Price/unit (USD):').click({
    clickCount: 5
  })
  await page.getByLabel('Price/unit (USD):').click()
  await page.getByLabel('Price/unit (USD):').fill('5')
  await page.getByText('Price/unit (USD): Quantity: Discount: Remove Discount Remove Tier').click()
  await page.getByRole('spinbutton', { name: 'Discount:' }).click()
  await page.getByRole('spinbutton', { name: 'Discount:' }).fill('5')
  await page.getByText('Remove Discount Remove Tier').click()
  const downloadPromise = page.waitForEvent('download')
  await page.getByRole('button', { name: 'Download PDF' }).click()

  await page.getByRole('button', { name: 'Download PNG' }).click()
  const download1 = await downloadPromise
  await page.getByRole('link', { name: 'Gallery of the offers' }).click()
  const newNumberOfOffers = await countTheOffers(page)
  expect(newNumberOfOffers - numberOfOffers).toBe(2)
})
