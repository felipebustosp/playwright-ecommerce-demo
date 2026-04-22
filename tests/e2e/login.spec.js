const {test,expect} = require('@playwright/test');

test('Valid user can login', async ({page}) => {
  await page.goto('/');
  const username = page.locator('#user-name');
  const password = page.locator('#password');
  const loginBtn = page.locator('#login-button');

  await expect(username).toBeVisible();
  await expect(username).toBeEditable();
  await username.fill('standard_user');
  
  await expect(password).toBeVisible();
  await expect(password).toBeEditable();
  await password.fill('secret_sauce');
    
  await expect(loginBtn).toBeVisible();
  loginBtn.click();

  await expect(page).toHaveURL('/inventory.html');
}); 
