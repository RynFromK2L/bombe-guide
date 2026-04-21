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
    A_\top := \begin{abstraction}{x} \r x \\ \hline x_\bomb \end{abstraction} &
    A_\bot := \begin{abstraction}{} \r0 \\ \hline ?_\sweep \end{abstraction} \\
    A_{\top_\geq} := \begin{abstraction}{x} \r{x+} \\ \hline x_\bomb \end{abstraction} &
    A_{\bot_\leq} := \begin{abstraction}{} \r{0-} \\ \hline ?_\sweep \end{abstraction} \\
    A_{\top_\oplus} := \begin{abstraction}{xa} \r{\or x{x+a}} \\ \hline x_\bomb \end{abstraction} &
    A_{\bot_\oplus} := \begin{abstraction}{a} \r{\or0{a+1}} \\ \hline a-_\sweep \end{abstraction} \\
    A_{\top_{\oplus\oplus}} := \begin{abstraction}{xa}
        \r{\oror x{x+a}{x+2a}} \\
        \hline
        x_\bomb
    \end{abstraction} &
    A_{\bot_{\oplus\oplus}} := \begin{abstraction}{a}
        \r{\oror 0{a+1}{2a+2}} \\
        \hline
        a-_\sweep
    \end{abstraction} \\
    A_{\top_{2^*}} := \begin{abstraction}{x} \r{\parity x} \\ \hline x_\bomb \end{abstraction} &
    A_{\bot_{2^*}} := \begin{abstraction}{} \r{2^*} \\ \hline 1_\sweep \end{abstraction} \\
    A_{\top_\lnot} := \begin{abstraction}{} \r{!0} \\ \hline 1_\bomb \end{abstraction} &
    A_{\bot_\lnot} := \begin{abstraction}{} \r{!1} \\ \hline 1_\sweep \end{abstraction}
\end{array}
$$

## Reduction

Reduction abstractions transform a more-complex region into a simpler, more-specific one.

$$
\begin{array}{cc}
    A_{\oplus_\downarrow} := \begin{abstraction}{xa} 
        \r{\or x{x+a+1}} \\ 
        \hline 
        (x+a)-_\r x 
    \end{abstraction} &
    A_{\oplus_\uparrow} := \begin{abstraction}{xya}
        \r{\or x{x+a}} && \r{x+y+1} \\
        \hline
        ?_\r{x+a} & ?_\r{x+a} & y-
    \end{abstraction}
\end{array}
$$

## Wires

"Wires" are special chains of regions where the presence or absence of a bomb at one end infers the counter state at the other.

$$
\begin{array}{cc}
    A_{\leftrightsquigarrow_1} := \begin{abstraction}{}
        \r1 && \r1 \\
        \hline
        ?_\r1 & ? & ?_\r1 \\
        ? & 0 & ? & 0 & \r1
    \end{abstraction} &
    A_{\leftrightsquigarrow_\oplus} := \begin{abstraction}{}
        \r1 && \r{\or01} \\
        \hline
        ?_\r{\or01} & ? & ?_\r{\or01} \\
        ? & ? & ? & 0 & \r1
    \end{abstraction}
\end{array}
$$

## Intersection

Intersection abstractions deal with detering some fact about the intersection between regions.

$$
A_{A_\oplus\cap B_\oplus} = \begin{abstraction}{xyab}
    \r{\or x{x+a}} && \r{\or{x+y+a}{x+y+a+b}} \\
    \hline
    ? & ?_\r{x+a} & y
\end{abstraction}
$$

## Subtraction

Our subtraction abstractions deal with removing a region from another in a way that lets us infer the subset's contents.

$$
\begin{array}{ccc}
    A_{(A\setminus B)_\top} := \begin{abstraction}{xy}
        \r{x+y} && \r y \\
        \hline
        x_\bomb & ? & ?
    \end{abstraction} &
    A_{(A\subsetneq B)_\bot} := \begin{abstraction}{x}
        \r x && \r x \\
        \hline ?_\sweep & ? & 0
    \end{abstraction} &
    A_{A\subsetneq B} := \begin{abstraction}{xy}
        \r{x+y} && \r y \\
        \hline {(x+1)+}_\r x & ? & 0
    \end{abstraction} \\
    A_{(A_\geq\setminus B)_\top} := \begin{abstraction}{xy}
        \r{(x+y)+} && \r y \\
        \hline
        x_\bomb & ? & ?
    \end{abstraction} &
    A_{(A_\leq\subsetneq B)_\bot} := \begin{abstraction}{x}
        \r{x-} && \r x \\
        \hline
        ?_\sweep & ? & 0
    \end{abstraction} \\
    A_{(A_\geq\setminus B_\leq)_\top} := \begin{abstraction}{xy}
        \r{(x+y)+} && \r{y-} \\
        \hline
        x_\bomb & ? & ?
    \end{abstraction} &
    A_{(A_\leq\subsetneq B_\geq)_\bot} := \begin{abstraction}{x}
        \r{x-} && \r{x+} \\
        \hline ?_\sweep & ? & 0
    \end{abstraction} \\
    A_{(A\setminus B_\leq)_\top} := \begin{abstraction}{xy}
        \r{x+y} && \r{y-} \\
        \hline
        x_\bomb & ? & ?
    \end{abstraction} &
    A_{(A\subsetneq B_\geq)_\bot} := \begin{abstraction}{x}
        \r{x} && \r{x+} \\
        \hline
        ?_\sweep & ? & 0
    \end{abstraction}
\end{array}
$$

$$
\begin{array}{ccc}
    A_{(A_\oplus\setminus B)_\top} := \begin{abstraction}{xya}
        \r{\or{x+y}{x+y+a}} && \r y \\
        \hline
        x_\bomb & ? & ?
    \end{abstraction} &
    A_{(A_\oplus\subsetneq B)_\bot} := \begin{abstraction}{xa}
        \r{\or x{x+a}} && \r{x+a} \\
        \hline
        ?_\sweep & ? & 0
    \end{abstraction} \\
    &
    A_{(A\subsetneq B_\oplus)_\bot} := \begin{abstraction}{xa}
        \r x && \r{\or x{x+a}} \\
        \hline
        ?_\sweep & ? & 0
    \end{abstraction}
\end{array}
$$

$$
\begin{array}{ccc}
    A_{A\setminus{B_2}} := \begin{abstraction}{x}
        \r{x+2} && \r2 \\
        \hline
        ?_\r{\or x{x+1}} & ? & 1
    \end{abstraction}
\end{array}
$$

## Hybrid

These abstractions are sorts of logical hybrids between others.  For example, a subtraction abstraction where one side is an intersection.  The difference between these and the above is that often the "inner" abstration can only be inferred by the out abstraction.

$$
\begin{array}{cc}
    A_{(C\setminus(A\cup B))_\top} := \begin{abstraction}{xyz}
        \r y && \r z \\
        \hline
        ? & ? & ? \\
        ? & ? & ? & x_\bomb & \r{x+y+z}
    \end{abstraction} &
\end{array}
$$

$$
\begin{array}{cc}
A_{((A_1\cap B_1)\setminus C)_\bot} := \begin{abstraction}{x}
    \r1 && \r1 \\
    \hline
    ? & ?_\sweep & ? \\
    ? & ? & ? & \or x{x+1} & \r{x+2}
\end{abstraction} &
A_{((A\Delta B)\setminus C)_\bot} := \begin{abstraction}{xyz}
    \r y && \r z \\
    \hline
    ?_\sweep & ? & ?_\sweep \\
    ? & ? & ? & x & \r{x+y+z}
\end{abstraction} \\
A_{((A_1\cap{B_{\leq1}})\setminus C_\geq)_\bot} := \begin{abstraction}{x}
    \r1 && \r{1-} \\
    \hline
    ? & ?_\sweep & ? \\
    ? & ? & ? & \or x{x+1} & \r{(x+2)+}
\end{abstraction} \\
A_{((A_1\cap B_1)\setminus C_\oplus)_\bot} := \begin{abstraction}{xa}
    \r1 && \r1 \\
    \hline
    ? & ?_\sweep & ? \\
    ? & ? & ? & x & \r{\or{x+1}{x+a+1}}
\end{abstraction}
\end{array}
$$

$$
\abstraction{((A_1\Delta B_1)\cap C_1)_\bot} := \begin{abstraction}{}
    \r1 && \r1 \\
    \hline
    0 & ? & 0 \\
    ?_\sweep & ? & ?_\sweep & ? & \r1
\end{abstraction}
$$

$$
\abstraction{(A\setminus(A_\oplus \cup B_\oplus))_\bot} := \begin{abstraction}{xy}
    \r{x+} && \r{y+} \\
    \hline
    0 & 0 & 0 \\
    ? & 0 & ? & ?_\sweep & \r{x+y}
\end{abstraction}
$$

$$
A_{((A_\oplus\Delta B)\setminus C_\oplus)_\bot} := \begin{abstraction}{xyzab}
    \r{\or y{y+b}} && \r z \\
    \hline
    ?_\sweep & ? & ?_\sweep \\
    ? & ? & ? & x & \r{\or{x+y+z+b}{x+y+z+a+b}}
\end{abstraction}
$$

$$
\begin{array}{cc}
A_{((A\cap B_{\oplus1})\setminus C_\geq)_\bot} := \begin{abstraction}{xyz}
    \r y && \r{(x+y+z)+} \\
    \hline
    ? & ? & x \\
    ?_\sweep & ? & ? & ? & \r{\or z{z+1}}
\end{abstraction}
\end{array}
$$
