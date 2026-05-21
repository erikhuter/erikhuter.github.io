---
layout: page
title: Example Questions and Solutions
description: Selected solutions for various example questions.
img: #assets/img/magnify.png
importance: 1
category: Textbook Solutions
related_publications: false
mathjax: true
---

<style>
 mjx-container[display="true"], .katex-display {
   overflow: visible !important;
 }
 .question-block {
   background-color: var(--global-card-bg-color);
   border-left: 5px solid var(--global-theme-color);
   padding: 1rem 1.5rem;
   margin-top: 2rem;
   margin-bottom: 0.5rem;
   border-radius: 4px;
 }
 .question-label {
   font-weight: bold;
   color: var(--global-theme-color);
   display: block;
   margin-bottom: 0.5rem;
   text-transform: uppercase;
   font-size: 0.9rem;
   letter-spacing: 1px;
 }
 .proof-dropdown {
   margin-bottom: 2.5rem;
 }
 .proof-dropdown summary {
   cursor: pointer;
   font-style: italic;
   color: var(--global-text-color);
 }
 .proof-content {
   margin-top: 1rem;
   padding: 1rem;
   border-radius: 6px;
   background-color: var(--global-bg-color);
   border: 1px solid var(--global-divider-color);
 }
</style>

$
\newcommand{\R}{\mathbb{R}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\Z}{\mathbb{Z}}
\newcommand{\RP}{\operatorname{Re}}
\newcommand{\IP}{\operatorname{Im}}
\newcommand{\abs}[1]{\left| #1 \right|}
\newcommand{\p}[1]{\left( #1 \right)}
\newcommand{\qed}{\blacksquare}
$

##### Chapter 1: Example Chapter

<div class="question-block">
  <span class="question-label">Exercise 1.1</span>
  Prove that $\sqrt{2}$ is irrational.
</div>

<details class="proof-dropdown">
  <summary>Proof</summary>
  <div class="proof-content">
    Suppose that $\sqrt 2$ is rational. Then it can be written as a fraction
    $$ \sqrt 2 = \frac{a}{b} $$
    where $\gcd(a,b)$ = 1. By squaring both sides we see
    $$ a^2 = 2 b^2. $$
    Since $a^2$ is a multiple of $2$, and $2$ is prime, we can conclude $a$ is even. Let $a = 2k$ for some $k \in \Z$. We now have:
    $$ a^2 = (2k)^2 = 4k^2 = 2b^2 \implies b^2 = 2k^2. $$
    For the same reasons, $b$ is also even. Thus $\gcd(a, b) \geq 2$, contradicting our initial assumption.
    <div align="right">$\qed$</div>
  </div>
</details>

<div class="question-block">
  <span class="question-label">Exercise 1.2</span>
  Question for exercise 1.2 goes here.
</div>

<details class="proof-dropdown">
  <summary>Proof</summary>
  <div class="proof-content">
    Proof content for exercise 1.2 goes here...
    <div align="right">$\qed$</div>
  </div>
</details>
