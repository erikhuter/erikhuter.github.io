---
layout: page
title: Lectures on Analysis on Metric Spaces by Juha Heinonen
description: Selected solutions for various questions from this book.
img: #assets/img/root2.png
importance: 1
category: Textbook Solutions #this is where the category goes
related_publications: false
sitemap: true
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

##### Chapter 2: Maximal Functions

<div class="question-block">
  <span class="question-label">Exercise 2.9</span>
  Prove $M(f)$ is never Lebesgue integrable in $\R^n$ unless $f \equiv 0$. Next, show that if $\mu (X)$ is finite, then $M(f) \in L^1(X) \iff \abs f \log (2 + \abs f) \in L^1(X)$.
</div>

<details class="proof-dropdown">
  <summary>Proof</summary>
  <div class="proof-content">
        Assume $f \not \equiv 0$ in the almost everywhere sense, and let $R>0$ such that $f$ is non-zero on a set of positive measure inside $B(0,R)$. Observe $B(0, R) \subset B(x, \abs x + R)$ for any $x \in \R^n$. Thus,
    $$\begin{align*}
        M(f)(x) 
        &= \sup_{r > 0} \frac{1}{\mu(B(x,r))} \int_{B(x,r)} \abs f \, dx \\
        &\geq \frac{1}{\mu(B(x, \abs x + R)} \int_{B(x, \abs x +R)} \abs f \, dx \\
        &\geq \frac{1}{\mu(B(x, \abs x + R)} \int_{B(0, R)} \abs f \, dx \\
        &= \frac{1}{\omega_n(\abs x+R)^n} \int_{B(0, R)} \abs f \, dx &&(\omega_n = \mu(B(0,1)) \text{ in } \R^n) \\
        &\geq\omega_n^{-1} (\abs x+R)^{-n} \cdot C && \text{($C \not = 0$ by construction of R)} \\ 
        &\geq C(n, R) (2\abs x)^{-n} = C(n,R) \abs x^{-n}
    \end{align*}$$
    where the last line is true for $\abs x \geq R$. Thus we have as $\abs x \to \infty$, $M(f)(x) \geq C(n) \abs x^{-n}$. 
    Without loss of generality let $R=1$ and find that a spherical change of variables results in 
    $$\begin{align*}
        \int_{\R^n} M(f)(x)\, dx 
        &\geq \int_{\R^n \setminus B(0,1)} M(f)(x)\, dx \\
        &\geq C\int_{\R^n \setminus B(0,1)} \abs x^{-n} \, dx \\
        &= C\int_1^\infty \int_{S^{n-1}} r^{n-1}\abs{r\omega}^{-n} \, d\omega \, dr \\
        &= \tilde C \int_1^\infty r^{-1} \, dr. &&(\abs \omega = 1, \tilde C = SA(S^{n-1 } \cdot C) )
    \end{align*}$$
    Using the fact that $1/t$ is not integrable on $t \geq 1$, the result is verified.
    <br>
    <br>
    $(\impliedby)$ For the next exercise we follow the proof of the maximal function theorem. Let $t>0$ and split $f$ into two parts as follows
    $$\begin{align*}
        f = f \cdot \chi_{\{ \abs f \leq t/2\}} + f \cdot \chi_{\{ \abs f > t/2\}}.
    \end{align*}$$
    Using the supremum version of the triangle inequality we find
    $$\begin{align*}
        M(f) \leq M(g) + M(b) \leq t/2 + M(b)
    \end{align*}$$
    and with this we can see
    $$\begin{align*}
        t< M(f) &\implies t < t/2 + M(b)\\ \implies t/2 < M(b) &\implies \{ M(f)>t\} \subset \{ M(b) > t/2\}. \tag 1
    \end{align*}$$
    Now, we bound $\int M(f)$ as follows
    $$\begin{align*}
        \int_XM(f) \, d\mu 
        &= \int_0^\infty \mu(\{ M(f)>t\}) \, dt && \text{(layer cake rep.)}\\
        &\leq \int_0^\infty \mu(\{ M(b) > t/2\}) \, dt && \text{(follows from (1))} \\
        &\leq \mu(X) + \int_1^\infty \mu(\{ M(b) >t/2 \}) \, dt && \text{(forcing $f \geq 1$)} \\
        &\leq  \mu(X) + 2C(\mu) \int_1^\infty \int_{X} 
        \frac{\abs b}{t} \, d\mu \, dt && \text{(weak estimate)} \\
        &=  \mu(X) + 2C(\mu) \int_1^\infty \int_{\{\abs f > t/2\}} \frac{\abs f}{t} \, d\mu \, dt && \text{(construction of $b$)} \\
        &= \mu(X) + 2C(\mu) \int_{X} \int_{1}^{\max(1, 2 \abs f)} \frac{\abs f}{t} \, dt \, d\mu && \text{(Fubini)} \\
        &\leq \mu(X) + 2C(\mu) \int_{X} \abs f \log( \max(1,2 \abs f)) \, d \mu && \text{(evaluating int.)} \\ 
        &\leq \mu(X) + 2C(\mu) \int_{X} \abs f \log( 4 + 2 \abs f ) \, d \mu \\
        &= \mu(X) + 2C(\mu) \int_{X} \abs f\left( \log 2 + \log( 2 + \abs f ) \right) \, d \mu  \\
        &= \mu(X) + 2C(\mu) \p{ \log 2 \int_{X} \abs f \, d \mu  + \int_{X} \abs f \log( 2 + \abs f ) \, d \mu } < + \infty
    \end{align*}$$
    where the last step is justified because for $x \geq 0$, $\log 2 \cdot  x \leq \abs f \log(2 + x)$, which is finite by assumption.
    <br>
    <br>
    $(\implies )$ The other direction is trickier and was proven by Stein in the $\R^n$ case in <a href="https://eudml.org/doc/217366">Note on the class $L \log L$</a>.
  <div align="right">$\qed$</div>
  </div>
</details>

<div class="question-block">
  <span class="question-label">Exercise 2.10</span>
  Suppose $\mathcal B = \{ B_1, B_2, \dots\}$ is a countable collection of balls in a doubling space $(X, \mu)$ and that $a_i \geq 0$ are real numbers. Show that
    $$
    \int_X \p{\sum_\mathcal B a_i \chi_{\lambda B_i}}^p d \mu \leq C (\lambda, p, \mu) \int_X \p{\sum_{\mathcal B} a_i \chi_{B_i}}^p d \mu
    $$
    for $1< p <\infty$ and $\lambda >1$.
</div>

<details class="proof-dropdown">
  <summary>Proof</summary>
  <div class="proof-content">
    Let  $B_i = B(x_i, r_i)$, $B_y = B(y, (\lambda +1 )r_i)$, and
    $$
    T_\lambda(x) = \sum_{\mathcal B} a_i \chi_{\lambda B_i}(x).
    $$
    First, $\lambda B_i \subset B_y$  since if $z \in \lambda B_i$ then $d(z,y) \leq d(z, x_i) + d(x_i,y) \leq r_i + \lambda r_i$. Let $g \geq 0$, then for each $y \in B_i$ we have
    $$
    \frac{1}{\mu (B_y)} \int_{\lambda B_i} g \, d\mu \leq  \frac{1}{ \mu( B_y)} \int_{B_y} g \, d\mu \leq M(g)(y)
    $$
    $$
    \implies \int_{\lambda B_i} g \, d\mu \leq \mu(B_y) M(g)(y) \leq C(\lambda+2)\mu(B_i) M(g)(y).
    $$
    where the last inequality follows since $B_y \subset B(x_i, (\lambda +2 )r_i)$. Notice the left side doesn't depend on $y$ so integrate both sides to finally find
    $$
    \begin{align*}
        \frac{1}{\mu (B_i)} \int_{B_i} \p{ \int_{\lambda  B_i} g \, d \mu} d\mu = \int_{\lambda B_i} g \, d \mu \leq C(\lambda+2) \int_{B_i}  M(g) \, d\mu. \tag{1}
    \end{align*}
    $$
    Next, for any $f \geq 0$, we have
    $$
    \begin{align*}
        \int_X T_\lambda f \,d\mu = \sum_{i} a_i \int_{\lambda B_i} f \, d\mu \tag{2}
    \end{align*}
    $$
    which follows from the construction of $T_\lambda$. 
    Combining these inequalities we find 
    $$
    \int _X T_{\lambda}g \, d\mu 
    \overset{(2)}{=}
    \sum_i a_i\int_{\lambda B_i} g \, d \mu  
    \overset{(1)}{\leq}  C(\lambda) \sum a_i  \int_{B_i} M(g) \, d \mu 
    \overset{(2)}{\leq} C(\lambda) \int_X T_1 M(g) \, d \mu
    $$
    Let $q$ be such that $1/p + 1/q = 1$, the Riesz Representation Theorem tells us
    $$
    \abs{\abs{ T_\lambda }}_{L^p} = \abs{\abs{ \int_X T_\lambda ( \_ ) }}_{(L^p)^*} = \sup_{\abs {\abs g}_{L^q} \leq 1} \abs{\int_X T_\lambda g \, d\mu}.
    $$
    From the inequality we showed above, Holder's inequality, the maximal function theorem, and $\abs{\abs g}_{L^q} \leq 1$ we find
    $$
    \begin{align*}
    \int _X T_{\lambda}g \, d\mu  
    & \leq C(\lambda) \int_X T_1 M(g) \, d \mu \\
    & \leq C(\lambda)\abs{\abs {T_1}}_{L^p} \abs{\abs{M(g)}}_{L_q}  \\
    & \leq  C(\lambda) C(p)  \abs{\abs {T_1}}_{L^p} \abs{\abs{g}}_{L_q}  \\
    & \leq C(\lambda, p) \abs{\abs{T_1}}_{L^p}. 
    \end{align*}
    $$
    Thus, from the Riesz Representation Theorem we find 
    $$
    \abs{\abs{ T_\lambda }}_{L^p} \leq C(\lambda, p) \abs{\abs{T_1}}_{L^p}
    $$
    giving us the final result
    $$
    \int_X \p{\sum_\mathcal B a_i \chi_{\lambda B_i}}^p d \mu \leq C (\lambda, p, \mu) \int_X \p{\sum_{\mathcal B} a_i \chi_{B_i}}^p d \mu.
    $$
    <div align="right">$\qed$</div>
  </div>
</details>

<div class="question-block">
  <span class="question-label">Exercise 2.11</span>
    Let $\mathcal B = \{ B_i \}_{i \in I} $ be a countable collection of pairwise disjoint balls in a doubling measure space $(X, d, \mu)$. Let 
    $$\begin{align*}    
        A_\lambda = \bigcup_i \lambda B_i \text{ and } T_\lambda(x) = \sum_i \chi_{\lambda B_i}(x)
    \end{align*}$$
    Show there exists $\epsilon > 0$ such that
    $$\begin{align*}
        \int_{A_\lambda}  \exp(\epsilon T_\lambda  ) \, d \mu \leq C(\lambda, \mu) \mu(\cup_i B_i) = C(\lambda, \mu) \mu (A_1).
    \end{align*}$$
</div>

<details class="proof-dropdown">
  <summary>Proof</summary>
  <div class="proof-content">
    First expand using the Taylor Series of $e^x$.
    $$\begin{align*}
        \int_{A_\lambda}  \exp(\epsilon T_\lambda) \, d\mu &= \sum_{n=0}^\infty \int_{A_\lambda} \frac{\epsilon^n}{n!} (T_\lambda)^n \, d \mu \\
        &= \int_{A_\lambda} d\mu + \int_{A_\lambda}\epsilon T_\lambda \, d\mu +\sum_{n=2}^\infty \int_{A_\lambda} \frac{\epsilon^n}{n!}  (T_\lambda)^n \, d \mu  \\
        &= \mu(A_\lambda) + \epsilon \sum_i \mu (\lambda B_i) + \sum_{n=2}^\infty \int_{A_\lambda} \frac{\epsilon^n}{n!}  (T_\lambda)^n \, d \mu 
        \end{align*}$$
    which follows directly from the construction of $T_\lambda$. Next, using the doubling property to find
    $$\begin{align*}
         &\mu (A_\lambda) + \epsilon \sum_i \mu (\lambda B_i) + \sum_{n=2}^\infty \int_{A_\lambda} \frac{\epsilon^n}{n!}  (T_\lambda)^n \, d \mu  \\
        & \leq \sum_i \mu (\lambda B_i) + \epsilon \sum_i \mu (\lambda B_i) + \sum_{n=2}^\infty \int_{A_\lambda} \frac{\epsilon^n}{n!}  (T_\lambda)^n \, d \mu  \\
        & \leq (1+\epsilon) C(\lambda) \sum \mu (B_i) + \sum_{n=2}^\infty \int_{A_\lambda} \frac{\epsilon^n}{n!}  (T_\lambda)^n \, d \mu  \\
        &= (1+\epsilon) C(\lambda) \mu(A_1) + \sum_{n=2}^\infty \int_{A_\lambda} \frac{\epsilon^n}{n!}  (T_\lambda)^n \, d \mu.
    \end{align*}$$
    Next, apply the results of Exercise 2.10 to find
    $$\begin{align*}
        & (1+\epsilon) C(\lambda) \mu(A_1) + \sum_{n=2}^\infty \int_{A_\lambda} \frac{\epsilon^n}{n!}  (T_\lambda)^n \, d \mu \\
        & \leq (1+\epsilon) C(\lambda) \mu(A_1) + \sum_{n=2}^\infty C(\lambda, n, \mu) \frac{\epsilon^n}{n!} \int_{A_1} (T_1)^n  \, d\mu \\
        & = (1+\epsilon) C(\lambda) \mu(A_1) + \sum_{n=2}^\infty C(\lambda, n, \mu) \frac{\epsilon^n}{n!}  \mu (A_1) = \p{(1+\epsilon) C(\lambda) + \sum_{n=2}^\infty C(\lambda, n, \mu) \frac{\epsilon^n}{n!}} \mu(A_1).
    \end{align*}$$
    We now just need to show that the term in front of $\mu (A_1)$ is a constant. Using Exercise 2.9 and following the proof of 2.10 we can see that $C(\lambda, n, \mu) = \widetilde{C}(\lambda) 2^n n /(n-1)$ is a suitable constant for our needs. Using this constant, it is clear to see we can choose $\epsilon > 0$ such that the summation converges. In particular, if $\epsilon = 1/2$, then the summation simplifies to $\sum 1/\p{(n-1)(n-1)!}$ which is less than $e-1$.
    <br>
    <br>
    Note well that the pairwise disjoint condition is slightly strict, but cannot be completely disregarded as a simple counterexample shows. Let $B_k = B(0, 1 + 1/k)$ for $k = 1,2, 3, \dots$. Then no matter what $\epsilon >0$ one chooses, $\exp(T_\lambda \epsilon)$ will be infinite on a set of non-zero measure, the unit ball $B(0, 1)$. Thus, the integral in question will be infinite. Similarly, the support of the chosen balls will be $B(0, 2) < \infty$ and no matter what constant $C$ we choose, $C \cdot \mu(B(0,2)) < \infty$.
    <div align="right">$\qed$</div>
  </div>
</details>
