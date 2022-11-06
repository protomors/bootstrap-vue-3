import{_ as c,o as u,c as d,a as n,b as s,d as e,w as t,e as l,r as i}from"./app.00a28a9e.js";const h={},m=n("h1",{id:"introduction",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),s(" Introduction")],-1),v=n("p",null,"Get started with BootstrapVue3 and Bootstrap v5, the world\u2019s most popular framework for building responsive, mobile-first sites.",-1),b={class:"custom-container danger"},k=n("p",{class:"custom-container-title"},"NOT PRODUCTION READY",-1),g=n("strong",null,"alpha version",-1),f={href:"https://github.com/cdmoro/bootstrap-vue-3/issues",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/cdmoro/bootstrap-vue-3/pulls",target:"_blank",rel:"noopener noreferrer"},y=n("h2",{id:"why-bootstrapvue3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#why-bootstrapvue3","aria-hidden":"true"},"#"),s(" Why BootstrapVue3?")],-1),w={href:"https://bootstrap-vue.org/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://bootstrap-vue.org/",target:"_blank",rel:"noopener noreferrer"},j=n("h2",{id:"contribute-and-support-\u{1F64C}",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#contribute-and-support-\u{1F64C}","aria-hidden":"true"},"#"),s(" Contribute and Support \u{1F64C}")],-1),B=n("p",null,[s("This project is still in "),n("strong",null,"alpha version"),s(" so there is much work to do. If you want to contribute you can:")],-1),V={href:"https://github.com/cdmoro/bootstrap-vue-3/issues/new",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/cdmoro/bootstrap-vue-3/pulls",target:"_blank",rel:"noopener noreferrer"},N={href:"https://patreon.com/cdmoro",target:"_blank",rel:"noopener noreferrer"},C=n("h3",{id:"one-time-donations",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#one-time-donations","aria-hidden":"true"},"#"),s(" One-time Donations")],-1),T=n("p",null,"Or if you prefer you can make a one-time donation through these channels:",-1),A={href:"https://www.buymeacoffee.com/cdmoro",target:"_blank",rel:"noopener noreferrer"},q=n("img",{src:"https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png",alt:'"Buy Me A Coffee"'},null,-1),P={href:"https://cafecito.app/cdmoro",target:"_blank",rel:"noopener noreferrer"},R=n("img",{src:"https://cdn.cafecito.app/imgs/buttons/button_2.svg",alt:"Invitame un caf\xE9 en cafecito.app"},null,-1),D=n("h2",{id:"requisites",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#requisites","aria-hidden":"true"},"#"),s(" Requisites")],-1),M=n("p",null,"To use this library you have to install these packages:",-1),O={href:"https://getbootstrap.com/docs/5.1/getting-started/introduction/",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,"5.x.x",-1),S={href:"https://v3.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},Y=n("code",null,"3.x.x",-1),E=l('<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><h3 id="installation-vue-js" tabindex="-1"><a class="header-anchor" href="#installation-vue-js" aria-hidden="true">#</a> Installation - Vue.js</h3><h4 id="preferred-installation" tabindex="-1"><a class="header-anchor" href="#preferred-installation" aria-hidden="true">#</a> Preferred Installation</h4>',3),G={href:"https://github.com/antfu/unplugin-vue-components",target:"_blank",rel:"noopener noreferrer"},W=n("li",null,[n("code",null,"unplugin-vue-components"),s(" may have the side effect feature of also automatically importing "),n("em",null,"your"),s(" components for ease of use. If you are uncomfortable with this, you may prefer the "),n("a",{href:"#legacy-installation"},[n("strong",null,"legacy")]),s(" installation without automatic tree-shaking")],-1),z=n("p",null,[s("Install the necessary packages for "),n("code",null,"bootstrap-vue-3"),s(":")],-1),F=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` bootstrap bootstrap-vue-3 @popperjs/core

`),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(" unplugin-vue-components "),n("span",{class:"token parameter variable"},"-D"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` bootstrap bootstrap-vue-3 @popperjs/core

`),n("span",{class:"token function"},"npm"),s(" i unplugin-vue-components "),n("span",{class:"token parameter variable"},"-D"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(` bootstrap bootstrap-vue-3 @popperjs/core

`),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(" unplugin-vue-components "),n("span",{class:"token parameter variable"},"-D"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=l(`<p>The following is an example of a basic <code>vite.config.js/ts</code>. All you need to do is add <strong>Components</strong> to the Vite <strong>plugins</strong> option, with the additional imports:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>BootstrapVue3Resolver<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">BootstrapVue3Resolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Finally, in your <code>main.js/ts</code> import the CSS:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token string">&#39;bootstrap/dist/css/bootstrap.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;bootstrap-vue-3/dist/bootstrap-vue-3.css&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="typescript-features" tabindex="-1"><a class="header-anchor" href="#typescript-features" aria-hidden="true">#</a> Typescript Features</h5><p>If using TypeScript you will want to add <code>components.d.ts</code> to the <code>include</code> array in your tsconfig.json:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;components.d.ts&quot;</span><span class="token punctuation">,</span> ...<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="legacy-installation" tabindex="-1"><a class="header-anchor" href="#legacy-installation" aria-hidden="true">#</a> Legacy Installation</h4><ul><li>This is the old installation method. It is recommended to use the <a href="#preferred-installation"><strong>preferred</strong></a> installation as it will automatically remove unused components, resulting in a lower bundle size. You can, however, still use this installation method</li></ul><p>Install the necessary packages for <code>bootstrap-vue-3</code>:</p>`,10),K=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` bootstrap bootstrap-vue-3 @popperjs/core
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),Q=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` bootstrap bootstrap-vue-3 @popperjs/core
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),X=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(` bootstrap bootstrap-vue-3 @popperjs/core
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),Z=l(`<p>Then, add to your <code>main.js/ts</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>createApp<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> BootstrapVue3 <span class="token keyword">from</span> <span class="token string">&#39;bootstrap-vue-3&#39;</span>

<span class="token comment">// Optional, since every component imports their Bootstrap functionality</span>
<span class="token comment">// the following line is not necessary</span>
<span class="token comment">// import &#39;bootstrap&#39;</span>

<span class="token keyword">import</span> <span class="token string">&#39;bootstrap/dist/css/bootstrap.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;bootstrap-vue-3/dist/bootstrap-vue-3.css&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>BootstrapVue3<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="installation-nuxt-js-3" tabindex="-1"><a class="header-anchor" href="#installation-nuxt-js-3" aria-hidden="true">#</a> Installation - Nuxt.js 3</h3><p><strong>Nuxt is not officially supported</strong>. Various Bootstrap JavaScript elements contain references to &#39;Document&#39; and &#39;Window&#39;, which will cause breaking issues during server-side rendering. Bootstrap-vue-3 is currently working on a fix for this</p><p>As with the Vue.js installation</p><p>In your Nuxt3 application, install the necessary packages for <code>bootstrap-vue-3</code></p>`,6),$=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` bootstrap bootstrap-vue-3 @popperjs/core
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),nn=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` bootstrap bootstrap-vue-3 @popperjs/core
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),sn=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(` bootstrap bootstrap-vue-3 @popperjs/core
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),en=l(`<p>Open your <code>nuxt.config.js/ts</code> file and configure your application to use <code>bootstrap-vue-3</code>. The components will be imported automatically as needed</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defineNuxtConfig<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;nuxt3&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;bootstrap-vue-3/nuxt&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;bootstrap/dist/css/bootstrap.css&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Enjoy it in your app without import.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BButton</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BButton</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="comparison-with-boostrapvue" tabindex="-1"><a class="header-anchor" href="#comparison-with-boostrapvue" aria-hidden="true">#</a> Comparison with BoostrapVue</h2>`,5),an={href:"https://bootstrap-vue.org/",target:"_blank",rel:"noopener noreferrer"},tn=n("code",null,"v4",-1),on=n("code",null,"v5",-1),ln=n("em",null,"not",-1);function pn(rn,cn){const a=i("ExternalLinkIcon"),o=i("CodeGroupItem"),p=i("CodeGroup"),r=i("RouterLink");return u(),d("div",null,[m,v,n("div",b,[k,n("p",null,[s("This project is still in "),g,s(". There is a lot of work to do, if you want to contribute you can use it and submit an "),n("a",f,[s("issue"),e(a)]),s(" or even better, a "),n("a",_,[s("pull request"),e(a)]),s(" \u{1F604}.")])]),y,n("p",null,[s("BootstrapVue3 is an attempt to have the "),n("a",w,[s("BootstrapVue"),e(a)]),s(" components in Vue3, Bootstrap 5, and typescript. Another goal is to have the components written in a simple and readable way.")]),n("p",null,[s("As you may suppose, this library is heavily inspired by "),n("a",x,[s("BootstrapVue"),e(a)]),s(", as well as the component properties, events, slots, directives, etc. We want to make it that way because we want to have compatibility with BootstrapVue, so it will be easy to switch between libraries.")]),j,B,n("ul",null,[n("li",null,[s("submit an "),n("a",V,[s("issue"),e(a)])]),n("li",null,[s("or better, a "),n("a",I,[s("pull request"),e(a)])]),n("li",null,[s("or even better, visit "),n("a",N,[s("my Patreon page"),e(a)]),s(" and support me \u{1F604}")])]),C,T,n("p",null,[n("a",A,[q,e(a)]),n("a",P,[R,e(a)])]),D,M,n("ul",null,[n("li",null,[n("a",O,[s("Bootstrap"),e(a)]),s(),L]),n("li",null,[n("a",S,[s("Vue.js"),e(a)]),s(),Y])]),E,n("ul",null,[n("li",null,[s("Bootstrap-vue-3 recommends using "),n("a",G,[s("unplugin-vue-components"),e(a)]),s(" for automatic tree-shaking. The following installation method is recommended")]),W]),z,e(p,null,{default:t(()=>[e(o,{title:"YARN",active:""},{default:t(()=>[F]),_:1}),e(o,{title:"NPM"},{default:t(()=>[J]),_:1}),e(o,{title:"PNPM"},{default:t(()=>[U]),_:1})]),_:1}),H,e(p,null,{default:t(()=>[e(o,{title:"YARN",active:""},{default:t(()=>[K]),_:1}),e(o,{title:"NPM"},{default:t(()=>[Q]),_:1}),e(o,{title:"PNPM"},{default:t(()=>[X]),_:1})]),_:1}),Z,e(p,null,{default:t(()=>[e(o,{title:"YARN",active:""},{default:t(()=>[$]),_:1}),e(o,{title:"NPM"},{default:t(()=>[nn]),_:1}),e(o,{title:"PNPM"},{default:t(()=>[sn]),_:1})]),_:1}),en,n("p",null,[s("As we said, we based this project on "),n("a",an,[s("BootstrapVue"),e(a)]),s(". We consider BootstrapVue as the best implementation of Bootstrap "),tn,s(", so a good approach is to replicate every BootstrapVue component, as well as their props, events, etc., and add the new features of Bootstrap "),on,s(".")]),n("p",null,[s("You can view the planned compatibility list in the following "),e(r,{to:"/reference/parityList.html"},{default:t(()=>[s("section")]),_:1}),s(". It is "),ln,s(" a migration guide, which will be finalized upon v1.0.0")])])}var dn=c(h,[["render",pn],["__file","index.html.vue"]]);export{dn as default};
