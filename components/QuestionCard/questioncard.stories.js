import "./questioncard.css";

export default {
  title: "Components/questioncard",
};

export const Default = () => 

`<article class="question-card">
<svg class= "question-card-svg" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
</svg> 
<h2 class="h2">Question</h2>
<p class="question-card-question">This is an example question? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum aa veniam provident incidunt non fugit repudiandae iure, a molestiae, voluptate consequuntur expedita</p>
<button class="button" type="button">Hide answer</button>
<p class="question-card-answer">This is the answer to the example question.</p>
<ul class="question-card-list">
  <li class="question-card-list-tag">tagtag 1</li>
  <li class="question-card-list-tag">tag 2</li>
  <li class="question-card-list-tag">tagtagtag 3</li>
  <li class="question-card-list-tag">tag 4</li>
</ul>
</article>`

export const Bookmarked = () =>

`<article class="question-card">
<svg class= "question-card-svg bookmarked" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
</svg> 
<h2 class="h2">Question</h2>
<p class="question-card-question">This is an example question? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum aa veniam provident incidunt non fugit repudiandae iure, a molestiae, voluptate consequuntur expedita</p>
<button class="button" type="button">Hide answer</button>
<p class="question-card-answer">This is the answer to the example question.</p>
<ul class="question-card-list">
  <li class="question-card-list-tag">tagtag 1</li>
  <li class="question-card-list-tag">tag 2</li>
  <li class="question-card-list-tag">tagtagtag 3</li>
  <li class="question-card-list-tag">tag 4</li>
</ul>
</article>`

export const AnswerHidden = () =>

`<article class="question-card">
<svg class= "question-card-svg " xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
</svg> 
<h2 class="h2">Question</h2>
<p class="question-card-question">This is an example question? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum aa veniam provident incidunt non fugit repudiandae iure, a molestiae, voluptate consequuntur expedita</p>
<button class="button" type="button">Hide answer</button>
<p class="question-card-answer hidden">This is the answer to the example question.</p>
<ul class="question-card-list">
  <li class="question-card-list-tag">tagtag 1</li>
  <li class="question-card-list-tag">tag 2</li>
  <li class="question-card-list-tag">tagtagtag 3</li>
  <li class="question-card-list-tag">tag 4</li>
</ul>
</article>`