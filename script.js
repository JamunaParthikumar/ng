let currentPage = 1;

function goToPage(pageNum) {
  document.getElementById(`page${currentPage}`).classList.remove("active");
  document.getElementById(`page${pageNum}`).classList.add("active");
  currentPage = pageNum;

  if (pageNum === 2) startWebcam();
  if (pageNum === 3) loadProducts();
  if (pageNum === 4) applyMakeup();
}

// Start with page 1
window.onload = () => {
  document.getElementById("page1").classList.add("active");
};

// Webcam logic
function startWebcam() {
  const video = document.getElementById("video");
  navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    video.srcObject = stream;
    setTimeout(() => {
      const canvas = document.getElementById("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Stop webcam
      stream.getTracks().forEach((track) => track.stop());

      document.getElementById("notification").innerText =
        "Image detected and analyzed ✅";
      document.getElementById("next2").style.display = "inline-block";
    }, 3000); // simulate face analysis delay
  });
}

function loadProducts() {
  const products = [
    {
      name: "Foundation",
      image:
        "https://s.yimg.com/ny/api/res/1.2/g25muDMGyqF7jAknzjNNdw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTYzOA--/https://media.zenfs.com/en-US/homerun/instyle_846/aea7494ff7a8eb6809fb82d81cb32507",
      rating: "4.5⭐",
      brand: "L'Oreal",
    },
    {
      name: "Lipstick",
      image:
        "https://cdn.shopify.com/s/files/1/1301/1643/products/sugar-cosmetics-matte-lipstick-01-boldplay-matte-attack-transferproof-lipstick-30169715277983@2x.jpg?v=1627989440",
      rating: "4.7⭐",
      brand: "Maybelline",
    },
    {
      name: "Eyeliner",
      image:
        "https://cdn0.woolworths.media/content/wowproductimages/large/749401.jpg",
      rating: "4.6⭐",
      brand: "Lakme",
    },
    {
      name: "Eyeshadow",
      image:
        "https://travelfashiongirlpostphotos.s3.us-east-2.amazonaws.com/Posts+Product+Update/Best+Makeup+Palettes+for+Travel+Update/best-makeup-palettes-for-travel-NYX.jpg",
      rating: "4.8⭐",
      brand: "MAC",
    },
    {
      name: "Cream",
      image:
        "http://www.ohmyboxmx.com/cdn/shop/files/s2639672-main-zoom.webp?v=1698356963",
      rating: "4.8⭐",
      brand: "Renee",
    },
    {
      name: "Toner",
      image:
        "http://beautyofjoseon.com/cdn/shop/files/1_85e4faa7-c3ef-47f5-bf6f-3d91a3a4948a.png?v=1705211511",
      rating: "4.8⭐",
      brand: "L'Oréal Paris",
    },
    {
      name: "Mascara",
      image:
        "https://cdn.notinoimg.com/social/farmasi/2800019899439_01-o/farmasi-full-blast-lash-multiplying-volume-mascara___240603.jpg",
      rating: "4.9⭐",
      brand: "Sugar",
    },
    {
      name: "Facial Spray",
      image:
        "https://wwd.com/wp-content/uploads/2021/02/maybelline-best-makeup-setting-sprays.jpeg",
      rating: "4.5⭐",
      brand: "Pilgrim",
    },
    {
      name: "Highlighter",
      image:
        "https://www.temptalia.com/wp-content/uploads/2022/12/rare-beauty_mesmerize_001_product.jpg",
      rating: "4.3⭐",
      brand: "MyGlamm",
    },
    {
      name: "Primer",
      image:
        "https://stylecaster.com/wp-content/uploads/2019/10/elf-hydrating-face-primer-amazon.jpg",
      rating: "4.4⭐",
      brand: "Biotique",
    },
    {
      name: "Face Powder",
      image:
        "https://www.2121cosmetics.com/wp-content/uploads/2021/02/CP004-3-1-scaled.jpg",
      rating: "4.8⭐",
      brand: "ColorBar",
    },
  ];

  const container = document.getElementById("products");
  container.innerHTML = "";
  products.forEach((p) => {
    container.innerHTML += `<div><img src="${p.image}" alt="${p.name}"><p><strong>${p.name}</strong><br>${p.rating}<br>${p.brand}</p></div>`;
  });
}

function applyMakeup() {
  const canvas = document.getElementById("canvas");
  const image = document.getElementById("makeupImage");
  image.src = canvas.toDataURL("image/png");

  setTimeout(() => goToPage(5), 3000); // simulate transition after makeup
}
