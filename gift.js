const feelingMessages = {
    overthinking: `
      <h2>🧠 When You're Overthinking</h2>
      <p>Breathe, baby. You're safe. You're doing enough. And you don't have to fix everything right now. Just feel loved — because you are. So much.</p>
    `,
    miss: `
      <h2>🥺 When You're Missing Me</h2>
      <p>Look at this little kiss → 💋<br>Now come find me and collect the real one. I miss you too, you beautiful soul.</p>
    `,
    love: `
      <h2>😍 When You're In Love</h2>
      <p>I know. Me too. It's scary how perfect this feels sometimes, huh? But don't worry — you and me, we're real. We're forever.</p>
    `,
    sad: `
      <h2>😔 When You're Sad</h2>
      <p>C'mere. You don’t have to be okay all the time. You can just be. I’ll hold the heavy with you. Always.</p>
    `,
    angry: `
      <h2>💥 When You're Angry</h2>
      <p>Okay, deep breath. Inhale. Exhale. Wanna scream into a pillow? Wanna hug me and curse the world? Both are allowed here.</p>
    `,
    need: `
      <h2>💌 When You Need Me</h2>
      <p>You're never alone. Never. Close your eyes. Picture me next to you. That's where I always am.</p>
    `,
    tired: `
      <h2>😴 When You're Tired</h2>
      <p>Rest, love. You've done enough. Let yourself sink into quiet. I’ll be here when you wake up.</p>
    `,
    fire: `
      <h2>🔥 When You Want Me</h2>
      <p>Well... hello there 😏<br>Yes, I'm yours. Yes, you can kiss me now. Yes, I want you too.</p>
    `,
    enough: `
      <h2>🧸 When You Feel Not Enough</h2>
      <p>You are enough. You're *more* than enough. You are the person I chose. Every part of you is worthy of love — especially on your hardest days.</p>
    `,
    hot: `
      <h2>😎 When You Feel Hot</h2>
      <p>As you should 😌<br>You're the full package, the rare drop, the entire damn dessert. I'd still swipe right. Twice.</p>
    `
  };
  
  function openFeeling(feeling) {
    document.getElementById("feeling-content").innerHTML = feelingMessages[feeling];
    document.getElementById("modal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  