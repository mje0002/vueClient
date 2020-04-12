<template>
	<div id='content'>
		<h1 id="basic-information">Basic Information:</h1>
		<blockquote>
			<p>This is a basic vue template. It uses typescript, webpack, node, and vue. </p>
			<p>This template has a server and client folder. The server folder is a simple node/express server. This is used
				<br />
				to server up the index file. The client folder holds your client side application.</p>
			<p><strong>Includes</strong>: vuex and vue router</p>
		</blockquote>
		<h1 id="pre-requirements-need">Pre Requirements Need:</h1>
		<ul>
			<li>webpack installed</li>
			<li>node installed </li>
		</ul>
		<h1 id="how-to-run-application">HOW TO RUN APPLICATION</h1>
		<h2 id="to-run--prod-mode--console-line">To run ( Prod Mode ) console line:</h2>
		<ol>
			<li>npm build</li>
			<li>node dist/server.js</li>
		</ol>
		<ul>
			<li>This will start an application listening on localhost:9000</li>
		</ul>
		<h2 id="to-run--dev-mode--console-line">To Run ( Dev Mode ) console line:</h2>
		<ol>
			<li>npm start</li>
		</ol>
		<ul>
			<li>This uses webpack-dev-server</li>
			<li>This will auto open your default browser window. Then it will redirect to localhost:8080</li>
			<li>Any edits made will be picked up and the browser will refesh to reload content.</li>
		</ul>

	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ReadMe extends Vue {
}
</script>

<style scoped lang="scss">

    @media only screen and (max-width: 600px) {
      #content {
        padding: 0px 20px 20px 20px !important;
      }
    }

    #content {
      margin: 0px;
      max-width: 900px;
      border: 1px solid #e1e4e8;
      padding: 10px 40px;
      padding-bottom: 20px;
      border-radius: 2px;
      margin-left: auto;
      margin-right: auto;
    }

    hr {
      color: #bbb;
      background-color: #bbb;
      height: 1px;
      flex: 0 1 auto;
      margin: 1em 0;
      padding: 0;
      border: none;
    }

    /**
 * Links
 */
    a {
      color: #0366d6;
      text-decoration: none;
    }

    a:visited {
      color: #0366d6;
    }

    a:hover {
      color: #0366d6;
      text-decoration: underline;
    }

    pre {
      background-color: #f6f8fa;
      border-radius: 3px;
      font-size: 85%;
      line-height: 1.45;
      overflow: auto;
      padding: 16px;
    }

    /**
  * Code blocks
  */

    code {
      background-color: rgba(27, 31, 35, .05);
      border-radius: 3px;
      font-size: 85%;
      margin: 0;
      word-wrap: break-word;
      padding: .2em .4em;
      font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
    }

    pre>code {
      background-color: transparent;
      border: 0;
      display: inline;
      line-height: inherit;
      margin: 0;
      overflow: visible;
      padding: 0;
      word-wrap: normal;
      font-size: 100%;
    }


    /**
 * Blockquotes
 */
    blockquote {
      margin-left: 30px;
      margin-top: 0px;
      margin-bottom: 16px;
      border-left-width: 3px;
      padding: 0 1em;
      color: #828282;
      border-left: 4px solid #e8e8e8;
      padding-left: 15px;
      font-size: 18px;
      letter-spacing: -1px;
      font-style: italic;
    }

    blockquote * {
      font-style: normal !important;
      letter-spacing: 0;
      color: #6a737d !important;
    }

    /**
 * Tables
 */
    table {
      border-spacing: 2px;
      display: block;
      font-size: 14px;
      overflow: auto;
      width: 100%;
      margin-bottom: 16px;
      border-spacing: 0;
      border-collapse: collapse;
    }

    td {
      padding: 6px 13px;
      border: 1px solid #dfe2e5;
    }

    th {
      font-weight: 600;
      padding: 6px 13px;
      border: 1px solid #dfe2e5;
    }

    tr {
      background-color: #fff;
      border-top: 1px solid #c6cbd1;
    }

    table tr:nth-child(2n) {
      background-color: #f6f8fa;
    }

    /**
 * Others
 */

    img {
      max-width: 100%;
    }

    p {
      line-height: 24px;
      font-weight: 400;
      font-size: 16px;
      color: #24292e;
    }

    ul {
      margin-top: 0;
    }

    li {
      color: #24292e;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }

    li+li {
      margin-top: 0.25em;
    }

    * {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      color: #24292e;
    }

    a:visited {
      color: #0366d6;
    }

    h1,
    h2,
    h3 {
      border-bottom: 1px solid #eaecef;
      color: #111;
      /* Darker */
    }
</style>