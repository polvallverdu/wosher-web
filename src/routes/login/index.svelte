<script>
  import LoginButton from "../../components/LoginButton.svelte";
</script>
<div class="text-white text-center">
  <p class="text-2xl font-semibold mb-4">¿Como quieres logearte?</p>
  <LoginButton url="https://google.com" text="Twitch" color="twitch" image="https://cdn.pol.engineer/webdata/icons/twitch.svg" blocked=true /> <br>
  <LoginButton url="https://google.com" text="Youtube" color="youtube" image="https://cdn.pol.engineer/webdata/icons/youtube.png" blocked=true /> <br>
  <LoginButton url="https://google.com" text="Twitter" color="twitter" image="https://cdn.pol.engineer/webdata/icons/twitter.svg" blocked=true /> <br>
</div>