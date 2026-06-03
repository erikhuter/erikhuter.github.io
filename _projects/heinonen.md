---
layout: page
title: Lectures on Analysis on Metric Spaces by Juha Heinonen
description: Selected solutions for various questions from this book.
img: #assets/img/root2.png
importance: 4
category: Textbook Solutions #this is where the category goes
related_publications: false
sitemap: false
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
   outline: none;
 }
 .proof-content {
   margin-top: 1rem;
   padding: 1rem;
   border-radius: 6px;
   background-color: var(--global-bg-color);
   border: 1px solid var(--global-divider-color);
  }
  .text-theme {
    color: var(--global-theme-color) !important;
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

##### Chapter 1: Covering Theorems

<div class="question-block">
  <span class="question-label">Theorem 1.2 (5r covering lemma)</span>
  Every family $\mathcal F$ of balls of uniformly bounded diameter in a metric space $X$ contains a disjointed subfamily $\mathcal G$ such that.
  $$
  \bigcup_{B \in \mathcal F} B \subset \bigcup_{B \in \mathcal G} 5B.
  $$
  Moreover, every ball $B$ from $\mathcal F$ meets a ball from $\mathcal G$ with radius at least half that of $B$. 
</div>

<details class="proof-dropdown">
  <summary>Proof</summary>
  <div class="proof-content">
      <span class="text-theme">Text in this color</span> denotes details I've added to the proof.
      <br>
      <br>
      Let $\Omega$ denote the partially ordered (by inclusion) set consisting of all disjointed subfamilies $\omega \subset \mathcal F$ where each $\omega$ is such that: 
      <span class="text-theme"> if $B(r) \in \mathcal F$ meets a ball from $\omega$, then it must meet a ball $B({r'}) \in \omega$, where $r' \geq r/2$ (1)</span>.
      
      Let $C$ be a chain <span class="text-theme"> ($C$ is totally ordered by inclusion) of $\Omega$ </span>, then
      $$
      \omega_0 = \bigcup_{\omega \in C} \omega
      $$
      belongs to $\Omega$ <span class="text-theme">and is an upperbound for $C$. First, $\omega_0 \in \Omega$ because if $B(r) \in \mathcal F$ meets a ball $B' \in \omega_0$, then $B' \in \omega$ for some $\omega \in C$. Since $\omega \in \Omega$, (1) holds for $\omega$ and thus it also holds for $\omega_0$. Furthermore, $\omega_0$ is a disjointed subfamily because if $B_1,B_2 \in \omega_0$ meet, then $B_1 \in \omega_1$ and $B_2 \in \omega_2$ for some $\omega_1, \omega_2 \in C$. Since $C$ is totally ordered, we can assume WLOG that $\omega_1 \subset \omega_2$ and thus $B_1, B_2 \in \omega_2$ which is disjointed, so $\omega_0 \in \Omega$. Furthermore, since $\forall \omega \in C, \omega \subset \omega_0$ (by construction of $\omega_0$), $\omega_0$ is an upperbound for $C$. Lastly, $\omega = \{ B(r) \} \in \Omega$ as long as $r \geq \alpha/2$ where $\alpha = \sup \{ r \mid B(r) \in \mathcal F \}$. Since every chain of $\Omega$ has an upperbound and $\Omega$ is nonempty, by Zorn's lemma $\exists \mathcal G \in \Omega$ which is maximal.
      </span>
      <br> 
      If there is a ball $B$ in $\mathcal F$ that does not meet any ball from $\mathcal G$, then pick a <span class="text-theme"> ball $B_0(r)$ from the set of balls that does not intersect $\mathcal G$ such that $r \geq \alpha'/2$ where $\alpha' = \sup \{ r \mid B(r) \text{ does not intersect } \mathcal G \}$
      </span>.
      Then, if a ball $B$ from $\mathcal F$ meets a ball from the collection $\mathcal G' = \mathcal G \cup \{ B_0 \}$, by construction it meets one whose radius is at least half that of $B$, showing $\mathcal G' \in \Omega$. But this contradicts the maximality of $\mathcal G$.
      <br>
      Thus, every ball $B=(x,r)$ from $\mathcal F$ meets a ball $B'(x', r')$ from $\mathcal G$ so that $2 r' \geq r$. <span class="text-theme"> Finally let $y \in B \cap B'$ so that if $z \in B$, then $d(z, x') \leq d(z, x) + d(x, y) + d(y, x') < r + r + r' \leq 5r'$ and so $B \subset 5B'$. The theorem immediately follows </span>.

    <div align="right">$\qed$</div>

  </div>
</details>
