const aniOnce = (context, key, n) => {
  return new Promise(resolve => {
    for (let i = 0; i <= n; i++) {
      setTimeout(() => {
        context[key] = i
        i === n && resolve()
      }, i * 200)
    }
  })
}

const aniLoop = (context, key, n) => {
  context[key] = 0
  setInterval(() => context[key] = (context[key] + 1) % n, 200)
}

const loop = () => {}

const clearAll = () => {
  let timeoutId = setTimeout(loop)
  while (timeoutId--) {
    clearTimeout(timeoutId)
  }

  let intervalId = setInterval(loop)
  while (intervalId--) {
    clearInterval(intervalId)
  }
}

export {
  aniOnce, aniLoop, clearAll
}
