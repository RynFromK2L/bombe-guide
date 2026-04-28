---
title: 2. Clues
---

# 2. Clues

We are given various clues about how many of those cells contain bombs and use those clues to determine which cells are the bomb-containing ones.

**Definition.** A _clue_ is a predicate known to be true for a set of cells.

**Definition.** A _clued set of cells_ is a set of cells defined with a true clue for the set.

## 2.1 Full & Empty Sets

**Definition.** A set of cells is _full_ if all cells contain a bomb.

**Definition.** A set of cells is _empty_ if all cells do not contain a bomb.

**Predicates.** Define the following predicates for sets of cells.

$$
\begin{align*}
  P_\top(C) &:= C_\top = C \\
  P_\bot(C) &:= C_\bot = C
\end{align*}
$$

## 2.2. Exact Value Clues

**Predicate.** Define the following predicate for sets of cells.

$$
P_x(x,C) := |C_\top| = x,\text{ where } x \in \mathbb{N}
$$

### Theorem 2. Empty Exact Value Clued Sets

$$
\forall C \in \mathbb{C}, P_x(0,C) \implies P_\bot(C)
$$

*Proof:* Show that $P_x(0,C) = P_\bot(C)$.

Let $C$ be a set of cells.  By Theorem 1, $C = C_\top \cup C_\bot$.

$$
\begin{align*}
P_x(0,C) \to |C_\top| &= 0, \\
C_\top &= \emptyset, \\
C &= C_\top \cup C_\bot \\
&= \emptyset \cup C_\bot \\
&= C_\bot \to P_\bot(C) \\
\therefore P_x(0,C) &= P_\bot(C)
\end{align*}
$$

### Theorem 3. Full Exact Value Clued Sets

$$
\forall x \in \mathbb{N} \; \forall C \in \mathbb{C} : |C| = x, P_x(x,C) \implies P_\top(C)
$$

*Proof:* Show that $P_x(x,C) = P_\top(C)$ when $|C| = x$.

Let $C$ be a set of cells, let $P_x(x,C)$ be true, and let $|C| = x$.  By Theorem 1, $C = C_\top \cup C_\bot = C_\top \Delta C_\bot$.

$$
\begin{align*}
|C| = x \to P_x(x,C) \to |C_\top| &= x, \\
C &= C_\top \Delta C_\bot \\
|C| &= |C_\top| + |C_\bot| \\
|C_\bot| &= |C| - |C_\top| \\
&= x - x \\
&= 0 \\
C_\bot &= \emptyset, \\
C &= C_\top \cup C_\bot \\
&= C_\top \cup \emptyset \\
&= C_\top \to P_\top(C) \\
\therefore |C| = x \to P_x(x,C) &= P_\top(C)
\end{align*}
$$

## 2.3. Minimum Value Clues

**Predicate.** Define the folowing predicate for sets of cells.

$$
P_\geq(x,C) := |C_\top| \geq x, \text{ where } x \in \mathbb{N}
$$

### Theorem 4. Full Minimum Value Clued Sets

$$
\forall x \in \mathbb{N} \; \forall C \subset \mathbb{C} : |C| = x, P_\leq(x,C) \implies P_\top(C) 
$$

*Proof:* Show that $P_\geq(x,C) = P_x(x,C)$ when $|C| = x$.

Let $C$ be a set of cells such that $|C| = x$.  By Theorem 1, $C = C_\top \cup C_\bot = C_\top \Delta C_\bot$.

$$
\begin{align*}
|C| = x \to P_\geq(x,C) \to |C_\top| &\geq x, \\
C &= C_\top \Delta C_\bot \\
|C| &= |C_\top| + |C_\bot| \\
|C| - |C_\bot| &= |C_\top| \\
x - |C_\bot| &\geq x \\
|C_\bot| &\leq x - x \\
&\leq 0 \\
&= 0, \\
|C_\top| &= |C| - |C_\bot| \\
&= x - 0 \\
&= x \to P_x(x,C) \\
\therefore |C| = x \to P_\geq(x,C) &= P_x(x,C)
\end{align*}
$$

By Theorem 3, $P_x(x,C) \implies P_\top(C)$ when $|C| = x$, therefore $P_\geq(x,C) \implies P_\top(C)$ when $|C| = x$.

## 2.4. Maximum Value Clues

**Predicate.** Define the following predicate for sets of cells.

$$
P_\leq(x,C) := |C_\top| \leq x, \text{ where } x \in \mathbb{N}
$$

### Theorem 5. Empty Maximum Value Clued Sets

$$
\forall x \in \mathbb{N} \; \forall C \subset \mathbb{C}, P_\leq(0,C) \implies P_\bot(C)
$$

*Proof:* Show that $P_\leq(0,C) = P_x(0,C)$.

Let $C$ be a set of cells.  By Theorem 1, $C = C_\top \cup C_\bot = C_\top \Delta C_\bot$.

$$
\begin{align*}
P_\leq(0,C) \to |C_\top| &\leq 0 \\
&= 0 \to P_x(0,C) \\
\therefore P_\leq(0,C) &= P_x(0,C)
\end{align*}
$$

By Theorem 2, $P_x(0,C) \implies P_\bot(C)$, therefore $P_\leq(0,C) \implies P_\bot(C)$.

## 2.5. Value Or Clues

**Predicate.** Define the following predicate for sets of cells.

$$
\begin{align*}
P_\lor(x,a,C) &:= P_x(x,C) \lor P_x(x+a,C), \text{ where } x,a \in \mathbb{N} \land (a > 0) \\
P_{\lor^2}(x,a,C) &:= P_x(x,C) \lor P_x(x+a,C) \lor P_x(x+2a,C), \text{ where } x,a \in \mathbb{N} \land (a > 0)
\end{align*}
$$

### Theorem 6. Reduction of Two-Value Or Clued Sets

$$
\forall x,a \in \mathbb{N} \; \forall C \subset C : |C| < x+a, P_\lor(x,a,C) \implies P_x(x,C)
$$

*Proof:* Show $P_\lor(x,a,C) = P_x(x,C)$ when $|C| < x+a$.

Let $C$ be a set of cells such that $|C| < x+a$.  By Theorem 1, $C = C_\top \cup C_\bot = C_\top \Delta C_\bot$.

$$
\begin{array}{lccc}
|C| < x+a \to P_\lor(x,a,C) \to & P_x(x,C) & \lor & P_x(x+a,C) \\
& |C_\top| = x && |C_\top| = x+a \\
C = C_\top \Delta C_\bot \\
|C| = |C_\top| + |C_\bot| \\
|C_\top| + |C_\bot| < x+a \\
|C_\top| < x+a - |C_\bot| & x < x+a - |C_\bot| && x+a < x+a - |C_\bot| \\
& 0 < a - |C_\bot| && 0 < -|C_\bot| \\
& |C_\bot| < a, && |C_\bot| < 0 \\
|C| - |C_\top| = |C_\bot| & |C| - x < a && \bot \\
& |C| < x+a \\
& \top \\
\end{array}
$$

Therefore, $P_\lor(x,a,C) \implies P_x(x,C)$ when $|C| < x+a$.

### Corollary 6.1. Empty Two-Value Or Clued Sets

$$
\forall a \in \mathbb{N} \; \forall C \subset \mathbb{C} : |C| < a, P_\lor(0,a,C) \implies P_\bot(C)
$$

*Proof:*

$$
\begin{array}{ll}
P_\lor(x,a,C) \land (|C| < x+a) \implies P_x(x,C) & \text{(by Theorem 6)} \\
P_x(0,C) \implies P_\bot(C) & \text{(by Theorem 2)} \\
\hline
P_\lor(0,a,C) \land (|C| < a) \implies P_\bot(C)
\end{array}
$$

### Corollary 6.2. Full Two-Value Or Clued Sets

$$
\forall x,a \in \mathbb{N} \; \forall C \subset \mathbb{C} : |C| = x, P_\lor(x,a,C) \implies P_\top(C)
$$

*Proof:*

$$
\begin{array}{ll}
P_\lor(x,a,C) \land (|C| < x+a) \implies P_x(x,C) & \text{(by Theorem 6)} \\
P_x(x,C) \land (|C| = x) \implies P_\top(C) & \text{(by Theorem 3)} \\
x < x+a \\
\hline
P_\lor(x,a,C) \land (|C| = x) \implies P_\top(C)
\end{array}
$$

### Theorem 7. Reduction of Three-Value Or Clued Sets

$$
\forall x,a \in \mathbb{N} \; \forall C \subset \mathbb{C} : |C| < x+2a, P_{\lor^2}(x,a,C) \implies P_\lor(x,a,C)
$$

*Proof:* Show that $P_{\lor^2}(x,a,C) = P_\lor(x,a,C)$ when $|C| < x+2a$.

Let $C$ be a set of cells such that $|C| < x+2a$.  By Theorem 2, $C = C_\top \cup C_\bot = C_\top \Delta C_\bot$.

$$
\begin{array}{lccccc}
|C| < x+2a \to P_{\lor^2}(x,a,C) \to & P_x(x,C) & \lor & P_x(x+a,C) & \lor & P_x(x+2a,C) \\
& |C_\top| = x && |C_\top| = x+a && |C_\top| = x+2a \\
C = C_\top \Delta C_\bot \\
|C| = |C_\top| + |C_\bot| \\
|C_\top| + |C_\bot| < x+2a \\
|C_\top| < x+2a - |C_\bot| & x < x+2a - |C_\bot| && x+a < x+2a - |C_\bot| && x+2a < x+2a - |C_\bot| \\
& 0 < 2a - |C_\bot| && 0 < a - |C_\bot| && 0 < -|C_\bot| \\
& |C_\bot| < 2a, && |C_\bot| < a, && |C_\bot| < 0 \\
|C| - |C_\top| = |C_\bot| & |C| - x < 2a && |C| - (x+a) < a && \bot \\
& |C| < x+2a && |C| < x+2a \\
& \top && \top \\
& P_x(x,C) & \lor & P_x(x+a,C) & \to & P_\lor(x,a,C) \\
\end{array}
$$

Therefore, $P_{\lor^2}(x,a,C) \implies P_\lor(x,a,C)$ when $|C| < x+2a$.

### Corollary 7.1. Double-Reduction of Three-Value Or Clued Sets

$$
\forall x,a \in \mathbb{N} \; \forall C \subset \mathbb{C} : |C| < x+a, P_{\lor^2}(x,a,C) \implies P_x(x,C)
$$

*Proof:*

$$
\begin{array}{ll}
P_{\lor^2}(x,a,C) \land (|C| < x+2a) \implies P_\lor(x,a,C) & \text{(by Theorem 7)} \\
P_\lor(x,a,C) \land (|C| < x+a) \implies P_x(x,C) & \text{(by Theorem 6)} \\
x+a < x+2a \\
\hline
P_{\lor^2}(x,a,C) \land (|C| < x+a) \implies P_x(x,C)
\end{array}
$$

### Corollary 7.2. Empty Three-Value Or Clued Sets

$$
\forall a \in \mathbb{N} \; \forall C \subset \mathbb{C} : |C| < a, P_{\lor^2}(0,a,C) \implies P_\bot(C)
$$

*Proof:*

$$
\begin{array}{ll}
P_{\lor^2}(x,a,C) \land (|C| < x+a) \implies P_x(x,C) & \text{(by Corollary 7.1)} \\
P_x(0,C) \implies P_\bot(C) & \text{(by Theorem 2)} \\
\hline
P_{\lor^2}(0,a,C) \land (|C| < a) \implies P_\bot(C)
\end{array}
$$

### Corollary 7.3. Full Three-Value Or Clued Sets

$$
\forall x,a \in \mathbb{N} \; \forall C \subset \mathbb{C} : |C| = x, P_{\lor^2}(x,a,C) \implies P_\top(C)
$$

*Proof:*

$$
\begin{array}{ll}
P_{\lor^2}(x,a,C) \land (|C| < x+a) \implies P_x(x,C) & \text{(by Corollary 7.1)} \\
P_x(x,C) \land (|C| = x) \implies P_\top(C) & \text{(by Theorem 3)} \\
x < x+a \\
\hline
P_{\lor^2}(x,a,C) \land (|C| = x) \implies P_\top(C)
\end{array}
$$

## 2.6. Parity Value Clues

**Predicate.** Define the following predicate for sets of cells.

$$
P_{2n}(x,C) := \exists n, P_x(2n+x,C), \text{ where } x,n \in \mathbb{N}
$$

### Theorem 8. Reduction of Parity Value Clued Sets

$$
\forall x \in \mathbb{N} \; \forall C \subset \mathbb{C} : |C| \leq x+5, P_{2n}(x,C) \implies P_{\lor^2}(x,2,C)
$$

*Proof:* Show that $P_x(2n+x,C)$ is only true when $|C| \leq x+5$ for $n \leq 2$.

Let $C$ be a set of cells such that $|C| \leq x+5$.  By Theorem 2, $C = C_\top \cup C_\bot = C_\top \Delta C_\bot$.

$$
\begin{array}{cccc}
P_x(2n+x) : n=0 & P_x(2n+x) : n=1 & P_x(2n+x) : n=2 & P_x(2n+x) : n=3 \\
P_x(2\times0+x) & P_x(2\times1+x) & P_x(2\times2+x) & P_x(2\times3+x) \\
P_x(x) & P_x(x+2) & P_x(x+4) & P_x(x+6) \\
|C_\top| = x, & |C_top| = x+2, & |C_\top| = x+4, & |C_\top| = x+6, \\
C = C_\top \Delta C_\bot \\
|C| = |C_\top| + |C_\bot| \\
x + |C_\bot| \leq x+5 & x+2 + |C_\bot| \leq x+5 & x+4 + |C_\bot| \leq x+5 & x+6 + |C_\bot| \leq x+5 \\
|C_\bot| \leq 5 & |C_\bot| \leq 3 & |C_\bot| \leq 1 & |C_\bot| \leq -1 \\
\top & \top & \top & \bot \\
\end{array}
$$

Therefore, $P_{2n}(x,C) = P_x(x,C) \lor P_x(x+2,C) \lor P_x(x+4,C) = P_{\lor^2}(x,2,C)$ when $|C| \leq 5$.

### Corollary 8.1. Reduction of Parity Value Clued Sets to Two-Value Or Clues

$$
\forall x \in \mathbb{N} \; \forall C \subset \mathbb{C} : |C| \leq x+3, P_{2n}(x,C) \implies P_\lor(x,2,C)
$$

*Proof:*

$$
\begin{array}{ll}
P_{2n}(x,C) \land (|C| \leq x+5) \implies P_{\lor^2}(x,2,C) & \text{(by Theorem 8)} \\
P_{\lor^2}(x,a,C) \land (|C| < x+2a) \implies P_\lor(x,a,C) & \text{(by Theorem 7)} \\
a = 2 \to x+2a = x+4 \leq x+5 \\
(x+4) - 1 = x+3 < x+4 \\
\hline
P_{2n}(x,C) \land (|C| \leq x+3) \implies P_\lor(x,2,C)
\end{array}
$$

### Corollary 8.2. Reduction of Parity Value Clued Sets to Exact Value Clues

$$
\forall x \in \mathbb{N} \; \forall C \subset \mathbb{C} : |C| \leq x+1, P_{2n}(x,C) \implies P_x(x,C)
$$

*Proof:*

$$
\begin{array}{ll}
P_{2n}(x,C) \land (|C| \leq x+3) \implies P_\lor(x,2,C) & \text{(by Corollary 8.1)} \\
P_\lor(x,a,C) \land (|C| < x+a) \implies P_x(x,C) & \text{(by Theorem 6)} \\
a = 2 \to x+a = x+2 \leq x+3 \\
(x+2)-1 = x+1 < x+2 \\
\hline
P_{2n}(x,C) \land (|C| \leq x+1) \implies P_x(x,C)
\end{array}
$$

### Corollary 8.3. Empty Parity Value Clued Sets

$$
\forall C \subset \mathbb{C} : |C| = 1, P_{2n}(0,C) \implies P_\bot(C)
$$

*Proof:*

$$
\begin{array}{ll}
P_{2n}(x,C) \land (|C| \leq x+1) \implies P_x(x,C) & \text{(by Corollary 8.2)} \\
P_x(0,C) \implies P_\bot(C) & \text{(by Theorem 2)} \\
\hline
P_{2n}(0,C) \land (|C| = 1) \implies P_\bot(C) & (|C| = 0 \text{ is meaningless})
\end{array}
$$

### Corollary 8.4. Full Parity Value Clued Sets

$$
\forall x \in \mathbb{N} \; \forall C \subset \mathbb{C} : |C| = x, P_{2n}(x,C) \implies P_\top(C)
$$

*Proof:*

$$
\begin{array}{ll}
P_{2n}(x,C) \land (|C| \leq x+1) \implies P_x(x,C) & \text{(by Corollary 8.2)} \\
P_x(x,C) \land (|C| = x) \implies P_\top(C) & \text{(by Theorem 3)} \\
x \leq x+1 \\
\hline
P_{2n}(x,C) \land (|C| = x) \implies P_\top(C)
\end{array}
$$

## 2.7. Not Value Clues

**Predicate.** Define the following predicate for sets of cells.

$$
P_\lnot(x,C) := |C_\top| \neq x, \text{ where } x \in \mathbb{N}
$$

### Theorem 9. Full Not Value Clued Sets

$$
\forall x \in \mathbb{N} \; \forall C \subset \mathbb{C} : |C| = 1, P_\lnot(0,C) \implies P_\top(C)
$$

*Proof:* Show that $|C_\bot| = 0$ when $|C| = 1$ and $|C_\top| \neq 0$.

Let $C$ be a set of cells such that $|C| = 1$.  By Theorem 1, $C = C_\top \cup C_\bot = C_\top \Delta C_\bot$.

$$
\begin{align*}
|C_\top| &\neq 0 \\
&\geq 1 \\
C &= C_\top \Delta C_\bot \\
|C| &= |C_\top| + |C_\bot| \\
|C| - |C_\bot| &= |C_\top| \\
1 - |C_\bot| &\geq 1 \\
0 &\geq |C_\bot| \\
0 &= |C_\bot| \\
\therefore |C| &= |C_\top|
\end{align*}
$$

### Theorem 10. Reduction of Not Value Clued Sets

$$
\forall x \in \mathbb{N} \; \forall C \subset \mathbb{C} : |C| = x+1, P_\lnot(x+1,C) \implies P_\leq(x,C)
$$

*Proof:* Show $C_\top < x$ when $P_\lnot(x,C)$ is true and $|C| = x$.

Let $C$ be a set of cells such that $|C| = x$.  By Theorem 1, $C = C_\top \cup C_\bot = C_\top \Delta C_\bot$.

$$
\begin{array}{rccc}
|C| = x \to P_\lnot(x,C) \to & |C_\top| \neq x \\
&|C_\top| < x & \lor & |C_\top| > x, \\
C = C_\top \Delta C_\bot \\
|C| = |C_\top| + |C_\bot| \\
|C| - |C_\bot| = |C_\top| & x - |C_\bot| < x && x - |C_\bot| > x \\
& 0 < |C_\bot|, && 0 > |C_\bot| \\
|C_\bot| = |C| - |C_\top| & 0 < x - |C_\top| && \bot \\
& |C_\top| < x \\
\end{array}
$$

Therefore, $P_\lnot(x+1,C) = P_\leq(x,C)$ when $|C| = x+1$.

### Corollary 10.1. Empty Not Value Clued Sets

$$
\forall C \subset \mathbb{C} : |C| = 1, P_\lnot(1,C) \implies P_\bot(C)
$$

*Proof:*

$$
\begin{array}{ll}
P_\lnot(x+1,C) \land (|C| = x+1) \implies P_\leq(x,C) & \text{(by Theorem 10)} \\
P_\leq(0,C) \implies P_\bot(C) & \text{(by Theorem 5)} \\
\hline
P_\lnot(1,C) \land (|C| = 1) \implies P_\bot(C)
\end{array}
$$
