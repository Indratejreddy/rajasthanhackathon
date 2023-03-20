async function getYoutubeVideoSummary(videoUrl) {
  // Extract the video ID from the URL
  const videoId = videoUrl.split("v=")[1];

  try {
    // Make a request to the YouTube Data API to get the video details
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=AIzaSyBbl925HWQHfwv2r_R92pn7_iBlxMuvI-k`
    );
    const data = await response.json();

    // Extract the relevant information from the response
    const title = data.items[0].snippet.title;
    const channel = data.items[0].snippet.channelTitle;
    const description = data.items[0].snippet.description;

    // Return the video summary as an object
    return {
      title,
      channel,
      description,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

document.querySelector(".getSummary").addEventListener("click", async () => {
  const videoUrl = document.querySelector(".video-link-input").value;
  const summary = await getYoutubeVideoSummary(videoUrl);
  document.querySelector(".output").value = `Channel Name: ${summary.channel}
      
  Title Of Video: ${summary.title}
      
  Summary:- ${summary.description}
      `;
});

document.querySelector(".download").addEventListener("click", () => {
  // Define the text content
  const textContent = document.querySelector(".output").value;

  // Create a Blob object from the text content
  const blob = new Blob([textContent], { type: "text/plain" });

  // Create a URL for the blob object
  const url = URL.createObjectURL(blob);

  // Create a link element with the download attribute
  const link = document.createElement("a");
  link.setAttribute("download", "filename.txt");
  link.href = url;

  // Add the link element to the DOM
  document.body.appendChild(link);

  // Programmatically click the link to start the download
  link.click();

  // Clean up by revoking the URL object
  URL.revokeObjectURL(url);
});

document.querySelector(".getLink").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Get the URL of the current tab

    // Call the callback function with the URL as an argument
    document.querySelector(".video-link-input").value = tabs[0].url;
    console.log(tabs[0].url);
  });
});
