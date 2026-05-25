---
layout: page
title: Other Questions and Solutions
description: Selected solutions to various questions I find interesting or elegant.
img: #assets/img/magnify.png
importance: 6
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
\newcommand{\N}{\mathbb{N}}
\newcommand{\Q}{\mathbb{Q}}
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
  <span class="question-label">1989 Putnam Exam B4</span>
  Does there exist an uncountable set of subsets of postive integers such that any two distinct subsets have finite intersection?
</div>

<details class="proof-dropdown">
  <summary>Proof</summary>
  <div class="proof-content">
    Yes! Consider the subset  $(0,1)$ of $\R$ (any interval will work). Now, for each $x \in (0,1)$, there exists a sequence of rationals converging to $x$ (by the definiton of the reals). Denote a sequence converging to $x$ by $(x_n)$. Now for each $x \in (0,1)$, take exactly one sequence converging to $x$. Let $S$ be the set of the ranges of these sequences (Axiom of Choice!). $S$ is uncountable because $(0,1)$ is uncountable. Furthermore, we claim the intersection of any two elements of $S$ is finite. This is because for any $\{x_n\}, \{y_n\} \in S$, we know they converge to distinct reals, call them $x,y \in (0,1)$ respectively. Now, let $\varepsilon = \abs{x - y} / 2$, then by defintion of convergence there exists a $N \in \N$ such that both $\abs{x_n - x} < \varepsilon$ and $\abs{y_n-y} < \varepsilon$ $\forall n \geq N$. That is, there is only finite $x_n$ and $y_n$ that can potentially intersect (since $(x- \varepsilon, x + \varepsilon) \cap (y - \varepsilon, y + \varepsilon) = \emptyset$). So, $S$ is uncountable and the intersection of any two elements of $S$ is finite. Finally, since $\Q$ is countable, take a bijection $f: \Q \to \N^+$ and apply it to every rational number in a range of $S$ and call this new set of "ranges" $S^*$. That is, $S^* = \{ f(\{x_n\}) \mid {x_n} \in S\}$ where $f(\{x_n\})$ is understood to be the application of $f$ to each $x_n$. $f$ is a bijection so both the pairwise finite intersection property and uncountability of $S$ are preserved, thus $S^*$ gives the desired result.
    <div align="right">$\qed$</div>
  </div>
</details>
