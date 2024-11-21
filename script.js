function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
  }
  
  const themes = {
    neon: {
      background: 'black',
      color: '#00ff00',
      shadow: '0 0 15px #00ff00',
    },
    vaporwave: {
      background: 'purple',
      color: '#ff77ff',
      shadow: '0 0 15px #ff77ff',
    },
    pixel: {
      background: '#1a1a1a',
      color: '#00ffff',
      shadow: '0 0 15px #00ffff',
    },
  };
  
  document.querySelectorAll('.theme-selector button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const theme = themes[btn.dataset.theme];
      const clock = document.querySelector('.clock');
      clock.style.background = theme.background;
      clock.style.color = theme.color;
      clock.style.textShadow = theme.shadow;
    });
  });

  async function fetchWeather() {
    try {
      const response = await fetch(
        'https://api.weatherapi.com/v1/current.json?key=8ba5df7ed5974ec7862233052242111&q=New York'
      );
      const data = await response.json();
      document.getElementById('weather').textContent = `🌤️ ${data.location.name}: ${data.current.temp_f}°F, ${data.current.condition.text}`;
    } catch (error) {
      console.error('Weather fetch error:', error);
      document.getElementById('weather').textContent =
        'Could not load weather data.';
    }
  }
  
  setInterval(updateTime, 1000);
  updateTime();
  
  fetchWeather();
  