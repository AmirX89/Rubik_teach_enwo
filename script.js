function animateButton(btn) {
      btn.style.transform = "translateY(4px)";
      btn.style.boxShadow = "0 2px 0 #94a3b8, 0 8px 16px -6px #1e293b";
      setTimeout(() => {
        btn.style.transform = "translateY(0px)";
        btn.style.boxShadow = "0 4px 0 #94a3b8, 0 8px 16px -6px #64748b";
      }, 100);
      alert("🚀 به دورهٔ آموزشی خوش اومدی! اولین جلسه: آشنایی با مکعب.");
    }

    function performTwist() {
      const btn = document.getElementById('twistBtn');
      const feedback = document.getElementById('twistFeedback');
      const cube1 = document.getElementById('cubePart1');
      const cube2 = document.getElementById('cubePart2');
      const cube3 = document.getElementById('cubePart3');
      const cubeVisual = document.getElementById('cubeVisual');
      
      cubeVisual.style.transform = 'rotateY(30deg) rotateX(10deg)';
      setTimeout(() => { cubeVisual.style.transform = 'rotateY(0deg) rotateX(0deg)'; }, 150);
      
      let original1 = '#dc2626', original2 = '#2563eb', original3 = '#16a34a';
      cube1.style.color = '#eab308'; // زرد
      cube2.style.color = '#ea580c'; // نارنجی
      cube3.style.color = '#2563eb'; // آبی
      
      feedback.innerHTML = '✅ R U R\' U' + "'";
      feedback.style.color = '#16a34a';
      
      setTimeout(() => {
        cube1.style.color = original1;
        cube2.style.color = original2;
        cube3.style.color = original3;
        feedback.innerHTML = 'حرکت بعدی رو امتحان کن!';
        feedback.style.color = '#2563eb';
      }, 600);
      
      btn.classList.add('animate__animated', 'animate__pulse');
      setTimeout(() => { btn.classList.remove('animate__animated', 'animate__pulse'); }, 500);
    }

    window.addEventListener('load', function() {
      console.log("کیوب‌آکادمی آماده است! ✅ بدون اسکرول افقی");
      
      const brandIcon = document.querySelector('.cube-icon-header i');
      if(brandIcon) {
        setInterval(() => {
          brandIcon.style.color = '#dc2626';
          setTimeout(() => brandIcon.style.color = '#2563eb', 200);
          setTimeout(() => brandIcon.style.color = '#16a34a', 400);
          setTimeout(() => brandIcon.style.color = '#eab308', 600);
          setTimeout(() => brandIcon.style.color = '#0f172a', 800);
        }, 3000);
      }
    });