const urlForm = document.getElementById('urlForm');
const screenshotPreview = document.getElementById('screenshotPreview');
const saveButton = document.getElementById('saveButton');
const savedScreenshotsList = document.getElementById('savedScreenshotsList');

urlForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const urlInput = document.getElementById('urlInput');
  const url = urlInput.value;

  const screenshotUrl = await generateScreenshot(url);

  if (screenshotUrl) {
    // Display the screenshot
    const img = document.createElement('img');
    img.src = screenshotUrl;
    img.alt = 'Screenshot';
    screenshotPreview.appendChild(img);
    // Enable save button
    saveButton.disabled = false;
  } else {
    screenshotPreview.innerText = 'Failed to generate screenshot.';
  }
});

saveButton.addEventListener('click', async () => {
  const urlInput = document.getElementById('urlInput');
  const url = urlInput.value;

  const screenshotUrl = await generateScreenshot(url);

  if (screenshotUrl) {
    await saveScreenshot(url, screenshotUrl);
  } else {
    console.log('Failed to generate screenshot.');
  }
});

const generateScreenshot = async (url) => {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': WEBSITE_SCREENSHOT_API_KEY,
      'X-RapidAPI-Host': 'website-screenshot6.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(screenshotUrl, options);
    if (response.ok) {
      const result = await response.json();
      return result.screenshot;
    } else {
      throw new Error('Failed to generate screenshot.');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const saveScreenshot = async (url, screenshotUrl) => {
  const requestBody = {
    url,
    screenshotUrl
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'CRUD-API-Key': CRUD_API_KEY
    },
    body: JSON.stringify(requestBody)
  };

  try {
    const response = await fetch(CRUD_API_KEY, options);
    if (response.ok) {
      const result = await response.json();
      console.log('Screenshot saved:', result);
      // Update the saved screenshots list on the page
      const savedScreenshotItem = document.createElement('li');
      savedScreenshotItem.textContent = url;
      savedScreenshotsList.appendChild(savedScreenshotItem);
    } else {
      throw new Error('Failed to save screenshot.');
    }
  } catch (error) {
    console.error(error);
  }
};
