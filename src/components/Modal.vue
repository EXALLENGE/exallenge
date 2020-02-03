<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="section-title">
          <slot name="header">{{title}}</slot>
        </header>
        <section class="modal-body">
          <slot name="body">{{text}}</slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <p type="button" class="btn" @click="close">OK</p>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style>
.section-title {
  margin: 0;
  margin-right: 180px;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 35px;
  line-height: 55px;
  color: #707070;

  padding: 15px;
}

.btn {
  padding: 8px 16px;
  border-radius: 3px;
  font-size: 18px;
  cursor: pointer;
  color: #30b58b;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 600px;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-footer {
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 15px;
}
</style>
<script>
export default {
  name: "modal",
  computed: {
    title: function() {
      return this.$store.state.modal.title;
    },
    text: function() {
      return this.$store.state.modal.text;
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
