---
title: 1. Cells
---

# 1. Cells

At its very foundation, the universe of Bombe is made up of distinct cells, each of which can either contain a bomb or not contain a bomb.  

**Definition.** A _cell_ is a unique, distinct location within the game of Bombe with either does or does not contain a bomb.

## Axiom 1. Cell State

$$
\forall x \in \mathbb{C}, (p_\top(x) \lor p_\bot(x)) \land \lnot (p_\top(x) \land p_\bot(x))
$$

**Definition.** $\mathbb C$ is the universal set of all cells.

**Predicates.** Define the following predicates for cells.

$$
\begin{rcases}
  p_\top(x) := x\text{ contains a bomb} \\
  p_\bot(x) := x\text{ does not contain a bomb} \\
\end{rcases}
\therefore
\begin{cases}
  p_\top(x) = \lnot p_\bot(x) \\
  p_\bot(x) = \lnot p_\top(x)
\end{cases}
$$

## Theorem 1. Subdivision of Sets of Cells

$$
\forall C \subset \mathbb C, \exists C_\top, C_\bot \subset C \text{ such that} \begin{cases}
  C_\top = \{x \in C : p_\top(x)\} \\
  C_\bot = \{x \in C : p_\bot(x)\} \\
  C = C_\top \cup C_\bot = C_\top \Delta C_\bot
\end{cases}
$$

*Proof:*  Show that all members of $C$ is a member of either $C_\top$ or $C_\bot$ but not both.

Let $A$ be a set of cells.

Build the subsets $A_\top$ and $A_\bot$ by the following rules:

$$
\forall x \in A, \begin{cases}
  p_\top(x) \to x \in A_\top \\
  p_\bot(x) \to x \in A_\bot
\end{cases}
$$

By Axiom 1, either $p_\top(x)$ or $p_\bot(x)$, but not both, must be true for any cell; therefore, the following must be true.

$$
\forall x \in A, (x \in A_\top \lor x \in A_\bot) \land \lnot (x \in A_\top \land x \in A_\bot)
$$
