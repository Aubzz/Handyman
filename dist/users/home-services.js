const workers = [
    { name: "Marian De Guzman", location: "Pasay City", rate: "₱150/hr", rating: "4.8", experience: "Experienced", image: "worker1.jpg" },
    { name: "John Doe", location: "Pasay City", rate: "₱150/hr", rating: "4.9", experience: "Professional", image: "worker2.jpg" },
  ];
  
  const serviceList = document.querySelector('.service-list');
  
  workers.forEach(worker => {
    const card = document.createElement('div');
    card.classList.add('service-card');
  
    card.innerHTML = `
      <img src="${worker.image}" alt="${worker.name}">
      <div class="service-info">
        <h3>${worker.name}</h3>
        <p><span class="location">${worker.location}</span></p>
        <p class="rate">${worker.rate}</p>
        <p><span class="rating">⭐ ${worker.rating}</span> • ${worker.experience}</p>
      </div>
    `;
  
    serviceList.appendChild(card);
  });
  