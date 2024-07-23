<template>
  <div class="h-screen grid grid-cols-3 divide-x">
    <div class="col-span-2 h-screen flex flex-col bg-slate-100">
      <div class="flex-1 overflow-y-auto p-8">
        <app-form-profile
          v-model:name="data.n"
          v-model:desc="data.d"
          v-model:image="data.i"
        />
        <app-form-hr />
        <app-form-social-links
          v-model:facebook="data.f"
          v-model:twitter="data.t"
          v-model:instagram="data.ig"
          v-model:github="data.gh"
          v-model:telegram="data.tg"
          v-model:linkedin="data.l"
          v-model:email="data.e"
          v-model:whatsapp="data.w"
          v-model:youtube="data.y"
          v-model:tiktok="data.tiktok"
        />
        <app-form-hr />
        <app-form-links v-model="data.ls" />
      </div>
      <div class="border-t bg-white flex items-center">
        <button
          @click="prefillDemoData"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Add demo data </span>
          <icon name="mdi:code-json" class="h-4 w-4" />
        </button>
        <button
          @click="publish"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Publish </span>
          <icon name="ph:paper-plane-tilt-bold" class="h-4 w-4" />
        </button>
        <a
          href="https://github.com/egagofur"
          target="_blank"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Github </span>
          <icon name="mdi:github" class="h-4 w-4" />
        </a>
      </div>
    </div>
    <app-form-preview :data="data" />
    <a
      href="https://egagofur.me"
      target="_blank"
      class="absolute bottom-0 right-0 bg-white rounded-tl-lg shadow px-4 py-1 font-medium text-sm text-gray-500"
    >
      Made by Ega
    </a>
  </div>
</template>

<script setup>
import { encodeData } from "../utils/transformer";
import { useToast } from "vue-toastification";

const toast = useToast();

const data = ref({
  n: "",
  d: "",
  i: "",
  f: "",
  t: "",
  ig: "",
  gh: "",
  tg: "",
  l: "",
  e: "",
  w: "",
  y: "",
  tiktok: "",
  ls: [],
});

const prefillDemoData = () => {
  data.value = {
    n: "Ega Gofur",
    d: "I’m a software engineer",
    i: "https://ucarecdn.com/7356359b-c63c-47a0-a950-db2828994f76/-/preview/750x1000",
    ig: "https://www.instagram.com/egagofur_",
    e: "egagofurtriwahana@gmail.com",
    gh: "https://github.com/egagofur",
    w: "+6285655501860",
    l: "https://linkedin.com/in/egagofur",
    tiktok: "https://tiktok.com/egagofur_",
    ls: [
      {
        l: "My Website",
        i: "ph:globe-duotone",
        u: "https://egagofur.me",
      },
      {
        l: "Ant Design course",
        i: "ant-design:ant-design",
        u: "https://ant.design/",
      },
      {
        l: "React JS course",
        i: "grommet-icons:reactjs",
        u: "https://reactjs.org/",
      },
      {
        l: "My resume",
        i: "ph:file-pdf",
        u: "https://cv-egagofur.vercel.app",
      },
    ],
  };
};

const publish = () => {
  const url = `${window.location.origin}/1?data=${encodeData(data.value)}`;
  navigator.clipboard.writeText(url).then(() => {
    toast.success("Link copied to clipboard");
  });
};
</script>
