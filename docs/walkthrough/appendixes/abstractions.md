---
title: Abstractions
---

# Appendix A: Abstractions

Abstractions are meta-rules, modeling logic that can be used for creating one or more rules.  These are not game elements, so they are not limited by your unlocks, limited to at most five variables, restrict use of variables to only base additions (i.e. an abstraction can use a region like $\r{\oror x{x+a}{x+2a}}$).

When it does come to variables, the letter used hints at whether it can be replaced with a game variable (i.e. $\{X,\Psi,K,\Pi,H\}$).

- Letters from the end of the alphabet (i.e. $\{z,y,x,...\}$) are used for where we could insert a game variable  
(e.g. $(x+1) \to \v X{+1}$)
- Letters from the start of the alphabet (i.e. $\{a,b,c,...\}$) are used where we cannot replace it with a game variable  
(e.g. $\or0{a} \to \or02$)

## Basic

Our basic abstractions are the those that are effectively self-evident.

$$
\begin{array}{cc}
    A_\top := \begin{abstraction}{x}
        \r x \\
        \hline
        x_\bomb
    \end{abstraction} &
    A_\bot := \begin{abstraction}{}
        \r0 \\
        \hline
        ?_\sweep
    \end{abstraction}
\end{array}
$$

## Subtraction

Our subtraction abstractions deal with removing a region from another in a way that lets us infer the subset's contents.

$$
\begin{array}{ccc}
    A_{{A/B}_\top} := \begin{abstraction}{xy}
        \r{x+y} && \r y \\
        \hline
        x_\bomb & ? & ?
    \end{abstraction} &
    A_{{A/B}_\bot} := \begin{abstraction}{x}
        \r x && \r x \\
        \hline ?_\sweep & ? & 0
    \end{abstraction}
\end{array}
$$
