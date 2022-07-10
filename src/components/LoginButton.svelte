<script lang="ts">
  export let url: string;
  export let color: string;
  export let text: string;
  export let image: string;
  export let blocked: boolean;

  function login() {
    if (blocked) {
      alert("Aún no esta implementado, sorry :(")
    }
  }

  function getClass(): string {
    return `bg-${color} text-white p-2 rounded-md {hover:shadow-md hover:-translate-y-0.5 transition-all duration-[300ms]}`;
  }
</script>

<button on:click={() => login()} class={getClass()}>
  <!-- Image to the left, text to the right -->
  <div class="flex-container">
    <img class="max-w-[1rem] object-cover mr-2" src={image} />
    <p class="mx-4 font-semibold">
      {text}
    </p>
  </div>
</button>

<style>
  .flex-container {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    }

.flex-item:nth-child(1) {
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    }

.flex-item:nth-child(2) {
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    }
</style>