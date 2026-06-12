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
  Every family $\mathcal F$ of balls of uniformly bounded diameter in a metric space $X$ contains a disjoint subfamily $\mathcal G$ such that.
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

<div class="question-block">
  <span class="question-label">Lemma for Theorem 1.6</span>
  Prove that a doubling metric measure space is separable.
  <br>
  <br>
  In the proof of Theorem 1.6 (Vitali covering theorem), it is asserted without proof that the subfamily $\mathcal G$ is necessarily countable. Separability proves this assertion for both the bounded and unbounded case (proven in the last paragraph).
</div>

<details class="proof-dropdown">
  <summary>Proof</summary>
  <div class="proof-content">
    Let $(X, d, \mu)$ be a doubling metric measure space. First I claim that any ball $B(x_0, r) \subset X$ can be covered by finite balls of radius $r/2$ in a doubling measure. Let $C(\mu) = C$ be the doubling constant. Consider a set $S \subset B(x_0, r)$ with the following properties: 
    $$
    \begin{align}
      \text{if $x, y \in B(x_0, r)$ are distinct, then $d(x, y) \geq r/2$} \\
      \text{$\forall z \in B(x_0, r)$, $\exists x \in S$ such that $d(x,z) < r/2$}.
    \end{align}
    $$
    The second property can hold because if it didn't, then there is some $y \in B(r)$ that is not within $r/2$ of any point in $S$. Thus it can be added to $S$ without breaking the first condition. Now, we prove some more properties about S. By property (1), we can see
    $$
    \begin{align}
      \text{$\forall x, y \in S$, the balls $B(x, r/4)$ and $B(y, r/4)$ are disjoint}.
    \end{align}
    $$
    Furthermore, an application of the triangle inequality shows 
    $$
      \begin{align}
        B(x, r/4) \subset B(x_0, 2r) \subset B(x, 4r).
      \end{align}
    $$
    Lastly, applying the doubling constant four times results in 
    $$
      \begin{align}
        C^{-4} \mu \p{B(x, 4r)} \leq \mu \p{B(x, r/4)}.
      \end{align}
    $$
    From (4) we see
    $$
    \begin{align}
      \bigcup_{x \in S} B(x, r/4) \subset B(x_0, 2r) \implies \sum_{x \in S} \mu \p{B(x, r/4)} \leq \mu \p{B(x_0, 2r)}
    \end{align}
    $$
    and the implication follows due to disjointness (3). 
    Finally, we can see
    $$
    \begin{align*}
      \mu \p{B(x_0, 2r)} \overset{(6)}{\geq} \sum_{x \in S} \mu \p{B(x, r/4)} \overset{(5)}{\geq} C^{-4} \sum_{x \in S} \mu \p{B(x, 4r)} \overset{(4)}{\geq} \abs S C^{-4} \mu{\p{B(x_0, 2r)}} \\
      \implies \abs{S} \leq C^{4}
    \end{align*}
    $$
    Recall $S$ was the set of points in $B(x_0, r)$ that had properties (1) and (2). Thus, any arbitrary ball of radius $r$ in $X$ can be covered by $C^4$ or less balls of radius $r/2$.
    <br>
    <br>
    Next I claim any ball, $B(x_0, r)$, is separable. We will construct a set which is dense in $B(x_0, r)$ by covering it in a finite number of balls of radius $r/2$, then we will cover each of these balls by balls of radius $r/4$ and so on. Consider the collection of all the centers of these balls. This set is countable because it is the union of countable amount of finite sets. Furthermore, by our construction, any $x \in B(x_0, r)$ must be in a ball of radius $r/2^n$ for all $n \geq 0$. Thus, since $r/2^n \to 0$ as $n \to \infty$, we can see that $B(x_0, r)$ is separable.
    <br>
    <br>
    Finally, we are ready to prove $X$ is separable. Let $x_0 \in X$, the key is to notice $X = \bigcup_{n=0}^\infty B(x_0, n)$. Each of these balls is separable, so take the dense subset of each of these balls and call it $D_n$. Then the set
    $$
    D = \bigcup_{n=0}^\infty D_n
    $$
    is countable because it is the countable union of countable sets. It is also dense in $X$ because any point $x \in X$ there is a $N$ such that $x \in B(x_0, N)$ and a sequence of points converging to $x$ in $D_n \subset D$. $X$ is separable.
    <br>
    <br> 
    To prove that the subfamily $\mathcal G$ is necessarily countable, suppose it isn't. It is a disjoint family, so each $B \in \mathcal G$ has a unique point which must be in the dense set $D$, but this would suggest $D$ is uncountable.
    <div align="right">$\qed$</div>
  </div>
</details>

<div class="question-block">
  <span class="question-label">Theorem 1.6 (Vitali covering theorem): The Unbounded Case</span>
  It was left to the reader to prove Vitali's covering theorem for $A$ when $A$ is unbounded.
</div>

<details class="proof-dropdown">
  <summary>Proof</summary>
  <div class="proof-content">
    Let $(X, d, \mu)$ be a doubling metric space. Assume the radii of $\mathcal F$ are less than $1$. Let $\mathcal G \subset \mathcal F$ be the subfamily obtained from applying the 5R covering lemma (it is countable because $X$ is separable as shown in the previous proof). Define
    $$
        N= A \mathbin{\big\backslash} \bigcup_{B \in \mathcal G} B.
    $$
    Let $x_0 \in X$ Also, notate $N_k = N \cap B(x_0,k)$ for $k \in \N^+$. We now have $N_k \subset N_{k+1} \subset N$ for all $k \in \N^+$ and 
    $$
    \bigcup_{n=1}^\infty N_k = N.
    $$
    It now remains to show that $\mu (N_k) = 0$ for each $k$ because $\mu(N_k) \to \mu(N)$ as $k \to \infty$ (Baby Rudin Theorem 11.3 for those curious). Restrict the subfamily $\mathcal G$ to just the balls that intersect $B(x_0, k)$ and call this new subfamily $\mathcal G_k$. The rest of the proof given in the bounded case now applies to $\mathcal G_k$ and $N_k$ showing that $\mu \p{N_k} =0$ and thus $\mu \p N = 0$ and the unbounded case is proven.
  <div align="right">$\qed$</div>
  </div>
</details>
