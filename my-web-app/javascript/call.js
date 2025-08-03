


 
  const session = JSON.parse(localStorage.getItem("session"));

  if (!session) {
    alert("You're not logged in");
    window.location.href = "index.html";
  } else {
    document.getElementById("username").textContent = session.email;
  }

  
  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then((stream) => {
      const video = document.getElementById("video");
      video.srcObject = stream;
      console.log("Mic enabled");
    })
    .catch((err) => {
      alert("Camera or mic access denied.");
      console.error(err);
    });

  
  function logout() {
    localStorage.removeItem("session");
    window.location.href = "index.html";
  }
