<script setup>
async function performSignIn() {
  return await fetch("https://localhost:7112/WeatherForecast")
    .then((resp) => {
      if (!resp.ok) {
        throw `Server error: [${resp.status}] [${resp.statusText}] [${resp.url}]`;
      }
      return resp.json();
    })
    .then((receivedJson) => {
      // your code with json here...
    })
    .catch((err) => {
      console.debug("Error in fetch", err);
      setErrors(err);
    });
}

performSignIn();
</script>

<template>
  <div>Привет</div>
</template>

<style scoped></style>
