---
title: Phase 2 (1-Variable Rules)
---

# Phase 2: Abstraction at Last!

With our first variable, $X$ (Chi), unlocked, we can finally start consolidating our rules to better follow our abstractions.  There are cases where we won't be able to generalize rules, such as for different "constant" values in an abstration (e.g. $A_{\top_\oplus} := \begin{abstraction}{xa} \r{\or x{x+a}} \\ \hline x_\bomb \end{abstraction}$), and we may need multiple rules if we need more than one "variable" value (e.g. $A_{(A\setminus B)_\top} := \begin{abstraction}{xy} \r{x+y} && \r y \\ \hline x_\bomb & ? & ? \end{abstraction}$).  Still, let's see what we can clean up!

## Rule Cleanup

First we'll start with our basic abstractions.  The sweeping rules are already fully generalized (e.g. $\rule0 = A_\bot, \rule{19} = A_{\bot_\leq}$), but we can clean up a the bomb rules.

$$
\begin{rcases}
    \rule1 = \begin{rule} \r1 \\ \hline 1_\bomb \end{rule} \\
    \rule2 = \begin{rule} \r2 \\ \hline 2_\bomb \end{rule} \\
    \rule3 = \begin{rule} \r3 \\ \hline 3_\bomb \end{rule} \\
    \rule4 = \begin{rule} \r4 \\ \hline 4_\bomb \end{rule} \\
    \rule5 = \begin{rule} \r5 \\ \hline 5_\bomb \end{rule} \\
    \rule{17} = \begin{rule} \r6 \\ \hline 6_\bomb \end{rule}
\end{rcases}
\implies A_\top := \begin{abstraction}{x} \r x \\ \hline x_\bomb \end{abstraction}
\therefore \begin{cases}
    \underset{A_\top[x:=X]}{\rule1^\updated} = \begin{rule} \r X \\ \hline X_\bomb \end{rule} \\
    \remove{\rule{17}, \rule5, \rule4, \rule3, \rule2}
\end{cases}
$$

$$
\begin{rcases}
    \rule{15} = \begin{rule} \r{2+} \\ \hline 2_\bomb \end{rule} \\
    \rule{16} = \begin{rule} \r{1+} \\ \hline 1_\bomb \end{rule} \\
    \rule{18} = \begin{rule} \r{3+} \\ \hline 3_\bomb \end{rule} \\
    \rule{22} = \begin{rule} \r{5+} \\ \hline 5_\bomb \end{rule} \\
    \rule{30} = \begin{rule} \r{4+} \\ \hline 4_\bomb \end{rule}
\end{rcases}
\implies A_{\top_\geq} := \begin{abstraction}{x} \r{x+} \\ \hline x_\bomb \end{abstraction}
\therefore \begin{cases}
    \underset{A_{\top_\geq}[x:=X]}{\rule{15}^\updated} = \begin{rule} \r{X+} \\ \hline X_\bomb \end{rule} \\
    \remove{\rule{30}, \rule{22}, \rule{18},\rule{16}}
\end{cases}
$$

$$
\begin{rcases}
    \rule{30} = \begin{rule} \r{\or12} \\ \hline 1_\bomb \end{rule} \\
    \rule{31} = \begin{rule} \r{\or23} \\ \hline 2_\bomb \end{rule} \\
    \rule{32} = \begin{rule} \r{\or14} \\ \hline 1_\bomb \end{rule} \\
    \rule{33} = \begin{rule} \r{\or24} \\ \hline 2_\bomb \end{rule} \\
    \rule{35} = \begin{rule} \r{\or13} \\ \hline 1_\bomb \end{rule} \\
    \rule{37} = \begin{rule} \r{\or34} \\ \hline 3_\bomb \end{rule} \\
    \rule{40} = \begin{rule} \r{\or25} \\ \hline 2_\bomb \end{rule} \\
    \rule{43} = \begin{rule} \r{\or35} \\ \hline 3_\bomb \end{rule} \\
    \rule{46} = \begin{rule} \r{\or45} \\ \hline 4_\bomb \end{rule} \\
    \rule{51} = \begin{rule} \r{\or47} \\ \hline 4_\bomb \end{rule} \\
    \rule{54} = \begin{rule} \r{\or57} \\ \hline 5_\bomb \end{rule}
\end{rcases}
\implies A_{\top_\oplus} := \begin{abstraction}{xa} \r{\or x{x+a}} \\ \hline x_\bomb \end{abstraction}
\therefore \begin{cases}
    \underset{A_{\top_\oplus}[x:=X,a:=1]}{\rule{30}^\updated} = \begin{rule} \r{\or X{\v X{+1}}} \\ \hline X_\bomb \end{rule} \\
    \underset{A_{\top_\oplus}[x:=X,a:=2]}{\rule{31}^\updated} = \begin{rule} \r{\or X{\v X{+2}}} \\ \hline X_\bomb \end{rule} \\
    \underset{A_{\top_\oplus}[x:=X,a:=3]}{\rule{32}^\updated} = \begin{rule} \r{\or X{\v X{+3}}} \\ \hline X_\bomb \end{rule} \\
    \remove{\rule{54}, \rule{51}, \rule{46}, \rule{43}, \rule{40}, \rule{37}, \rule{35}, \rule{33}}
\end{cases}
$$

$$
\begin{rcases}
    \rule{59} = \begin{rule} \r{\oror234} \\ \hline 2_\bomb \end{rule} \\
    \rule{61} = \begin{rule} \r{\oror123} \\ \hline 1_\bomb \end{rule}
\end{rcases}
\implies A_{\top_{\oplus\oplus}} := \begin{abstraction}{xa} \r{\oror x{x+a}{x+2a}} \\ \hline x_\bomb \end{abstraction}
\therefore \begin{cases}
    \underset{A_{\top_{\oplus\oplus}}[x:=X,a:=1]}{\rule{59}^\updated} = \begin{rule} \r{\oror X{\v X{+1}}{\v X{+2}}} \\ \hline X_\bomb \end{rule} \\
    \underset{A_{\top_{\oplus\oplus}}[x:=X,a:=2]}{\rule{61}^\updated} = \begin{rule} \r{\oror X{\v X{+2}}{\v X{+4}}} \\ \hline X_\bomb \end{rule}
\end{cases}
$$

$$
\begin{rcases}
    \rule{52} = \begin{rule} \r{\parity1} \\ \hline 1_\bomb \end{rule} \\
    \rule{56} = \begin{rule} \r{\parity3} \\ \hline 3_\bomb \end{rule} \\
    \rule{57} = \begin{rule} \r{\parity4} \\ \hline 4_\bomb \end{rule} \\
    \rule{58} = \begin{rule} \r{\parity2} \\ \hline 2_\bomb \end{rule}
\end{rcases}
\implies A_{\top_{2^*}} := \begin{abstraction}{x} \r{\parity x} \\ \hline x_\bomb \end{abstraction}
\begin{cases}
    \underset{A_{\top_{2^*}}[x:=X]}{\rule{52}^\new} = \begin{rule} \r{\parity X} \\ \hline X_\bomb \end{rule} \\
    \remove{\rule{58}, \rule{57}, \rule{56}}
\end{cases}
$$

With our basic rules generalized, we have turned 28 rules into 8.  Even better, these new rules can handle situations that we didn't cover previously, such as higher values of $x$ as well as $A_{\top_{\oplus\oplus}}[x:=X,a:=2]$.  Given these expansions, let's perform an auto-run pass of our three tabs; which surprisingly completes well over 1000 levels.

$$
\begin{rcases}
    \rule{39} = \begin{rule} \r{\or36} \\ \hline 5-_\r3 \end{rule} \\
    \rule{40} = \begin{rule} \r{\or14} \\ \hline 3-_\r1 \end{rule} \\
    \rule{42} = \begin{rule} \r{\or25} \\ \hline 4-_\r2 \end{rule} \\
    \rule{48} = \begin{rule} \r{\or13} \\ \hline 2-_\r1 \end{rule}
\end{rcases}
\implies A_{\oplus_\downarrow} := \begin{abstraction}{xa} \r{\or x{x+a+1}} \\ \hline (x+a)-_\r x \end{abstraction}
\therefore \begin{cases}
    \underset{A_{\oplus_\downarrow}[x:=X,a:=1]}{\rule{39}^\updated} = \begin{rule} \r{\or X{\v X{+2}}} \\ \hline \v x{+1}-_\r X \end{rule} \\
    \underset{A_{\oplus_\downarrow}[x:=X,a:=2]}{\rule{40}^\updated} = \begin{rule} \r{\or X{\v X{+3}}} \\ \hline \v X{+2}-_\r X \end{rule} \\
    \remove{\rule{48}, \rule{42}}
\end{cases}
$$

$$
\begin{rcases}
    \rule{41} = \begin{rule} \r{\or03} && \r2 \\ \hline ?_\r3 & ?_\r3 & 1- \end{rule} \\
    \rule{45} = \begin{rule} \r{\or01} && \r2 \\ \hline ?_\r1 & ?_\r1 & 1- \end{rule}
\end{rcases}
\implies A_{\oplus_\uparrow} := \begin{abstraction}{xya} \r{\or x{x+a}} && \r{x+y+1} \\ \hline ?_\r{x+a} & ?_\r{x+a} & y- \end{abstraction}
\therefore \begin{cases}
    \underset{A_{\oplus_\uparrow}[x:=X,y:=1,a:=1]}{\rule{41}^\updated} = \begin{rule}
        \r{\or X{\v X{+1}}} && \r{\v X{+2}} \\
        \hline
        ?_\r{\v X{+1}} & ?_\r{\v X{+1}} & 1-
    \end{rule} \\
    \underset{A_{\oplus_\uparrow}[x:=X,y:=1,a:=2]}{\rule{45}^\updated} = \begin{rule}
        \r{\or X{\v X{+2}}} && \r{\v X{+2}} \\
        \hline
        ?_\r{\v X{+2}} & ?_\r{\v X{+2}} & 1-
    \end{rule} \\
    \underset{A_{\oplus_\uparrow}[x:=X,y:=1,a:=3]}{\rule{60}^\new} = \begin{rule}
        \r{\or X{\v X{+3}}} && \r{\v X{+2}} \\
        \hline
        ?_\r{\v X{+3}} & ?_\r{\v X{+3}} & 1-
    \end{rule} \\
\end{cases}
$$

For these abstrations with $y$ or $z$ parameters, we can select which variable we substitute $X$ for; however, this one didn't need that.  We only created rules where $y:=1$, so there was no need to account for other values or variations at this time.  In the next case, we have the opposite; all of our current rules use $x:=0$ but variance in $y$, so we'll substitute $y:=X$.

$$
\begin{align*}
\begin{rcases}
    \rule{36} = \begin{rule} \r{\or01} && \r{\or12} \\ \hline ? & ?_\r1 & 0 \end{rule} \\
    \rule{42} = \begin{rule} \r{\or01} && \r{\or25} \\ \hline ? & ?_\r1 & 1 \end{rule} \\
    \rule{43} = \begin{rule} \r{\or01} && \r{\or34} \\ \hline ? & ?_\r1 & 2 \end{rule} \\
    \rule{46} = \begin{rule} \r{\or01} && \r{\or13} \\ \hline ? & ?_\r1 & 0 \end{rule} \\
    \rule{48} = \begin{rule} \r{\or01} && \r{\or23} \\ \hline ? & ?_\r1 & 1 \end{rule}
\end{rcases}
&\implies A_{A_\oplus\cap B_\oplus} = \begin{abstraction}{xyab}
    \r{\or x{x+a}} && \r{\or{x+y+a}{x+y+a+b}} \\
    \hline
    ? & ?_\r{x+a} & y
\end{abstraction} \\
&\therefore \begin{cases}
    \underset{A_{A_\oplus\cap B_\oplus}[x:=0,y:=X,a:=1,b:=1]}{\rule{36}^\updated} = \begin{rule}
        \r{\or01} && \r{\or{\v X{+1}}{\v X{+2}}} \\
        \hline
        ? & ?_\r1 & X
    \end{rule} \\
    \underset{A_{A_\oplus\cap B_\oplus}[x:=0,y:=X,a:=1,b:=2]}{\rule{42}^\updated} = \begin{rule}
        \r{\or01} && \r{\or{\v X{+1}}{\v X{+3}}} \\
        \hline
        ? & ?_\r1 & X
    \end{rule} \\
    \underset{A_{A_\oplus\cap B_\oplus}[x:=0,y:=X,a:=1,b:=3]}{\rule{43}^\updated} = \begin{rule}
        \r{\or01} && \r{\or{\v X{+1}}{\v X{+4}}} \\
        \hline
        ? & ?_\r1 & X
    \end{rule} \\
    \remove{\rule{48}, \rule{46}}
\end{cases}
\end{align*}
$$

With those done, we're left with our big abstration categories - subtraction and hybrid.

$$
\begin{rcases}
    \rule2 = \begin{rule} \r1 && \r5 \\ \hline ? & ? & 4_\bomb \end{rule} \\
    \rule4 = \begin{rule} \r2 && \r1 \\ \hline 1_\bomb & ? & ? \end{rule} \\
    \rule5 = \begin{rule} \r3 && \r1 \\ \hline 2_\bomb & ? & ? \end{rule} \\
    \rule7 = \begin{rule} \r4 && \r1 \\ \hline 3_\bomb & ? & ? \end{rule}
\end{rcases}
\implies A_{(A\setminus B)_\top} := \begin{abstraction}{xy} \r{x+y} && \r y \\ \hline x_\bomb & ? & ? \end{abstraction}
\therefore \begin{cases}
    \underset{A_{(A\setminus B)_\top}[x:=X,y:=1]}{\rule2^\updated} = \begin{rule} \r{\v X{+1}} && \r1 \\ \hline X_\bomb & ? & ? \end{rule} \\
    \remove{\rule7, \rule5, \rule4}
\end{cases}
$$

$$
\begin{rcases}
    \rule3 = \begin{rule} \r1 && \r1 \\ \hline ?_\sweep & ? & 0 \end{rule}
\end{rcases}
\implies A_{(A\subsetneq B)_\bot} := \begin{abstraction}{x} \r x && \r x \\ \hline ?_\sweep & ? & 0 \end{abstraction}
\therefore \begin{cases}
    \underset{A_{(A\subsetneq B)_\bot}[x:=X]}{\rule3^\updated} = \begin{rule} \r X && \r X \\ \hline ?_\sweep & ? & 0 \end{rule}
\end{cases}
$$

$$
\begin{rcases}
    \rule4 = \begin{rule} \r2 && \r1 \\ \hline 2+_\r1 & ? & 0 \end{rule} \\
    \rule5 = \begin{rule} \r3 && \r1 \\ \hline 3+_\r2 & ? & 0 \end{rule}
\end{rcases}
\implies A_{A\subsetneq B} := \begin{abstraction}{xy} \r{x+y} && \r y \\ \hline {(x+1)+}_\r x & ? & 0 \end{abstraction}
\therefore \begin{cases}
    \underset{A_{A\subsetneq B}[x:=X,y:=1]}{\rule4^\updated} = \begin{rule} \r{\v X{+1}} && \r1 \\ \hline \v X{+1}+_\r X & ? & 0 \end{rule} \\
    \remove{\rule5}
\end{cases}
$$

$$
\begin{rcases}
    \rule{13} = \begin{rule} \r{3+} && \r1 \\ \hline 2_\bomb & ? & ? \end{rule} \\
    \rule{25} = \begin{rule} \r{2+} && \r1 \\ \hline 1_\bomb & ? & ? \end{rule}
\end{rcases}
\implies A_{(A_\geq\setminus B)_\top} := \begin{abstraction}{xy} \r{(x+y)+} && \r y \\ \hline x_\bomb & ? & ? \end{abstraction}
\therefore \begin{cases}
    \underset{A_{(A_\geq\setminus B)_\top}[x:=X,y:=1]}{\rule{13}^\updated} = \begin{rule} \r{\v X{+1}+} && \r1 \\ \hline X_\bomb & ? & ? \end{rule} \\
    \remove{\rule{25}}
\end{cases}
$$

$$
\begin{rcases}
    \rule{20} = \begin{rule} \r{1-} && \r1 \\ \hline ?_\sweep & ? & 0 \end{rule}
\end{rcases}
\implies A_{(A_\leq\subsetneq B)_\bot} := \begin{abstraction}{x} \r{x-} && \r x \\ \hline ?_\sweep & ? & 0 \end{abstraction}
\therefore \begin{cases}
    \underset{A_{(A_\leq\subsetneq B)_\bot}[x:=X]}{\rule{20}^\updated} = \begin{rule} \r{X-} && \r X \\ \hline ?_\sweep & ? & 0 \end{rule}
\end{cases}
$$

$$
\begin{rcases}
    \rule{15} = \begin{rule} \r{2+} && \r{1-} \\ \hline 1_\bomb & ? & ? \end{rule} \\
    \rule{16} = \begin{rule} \r{4+} && \r{1-} \\ \hline 3_\bomb & ? & ? \end{rule} \\
    \rule{22} = \begin{rule} \r{3+} && \r{1-} \\ \hline 2_\bomb & ? & ? \end{rule}
\end{rcases}
\implies A_{(A_\geq\setminus B_\leq)_\top} := \begin{abstraction}{xy} \r{(x+y)+} && \r{y-} \\ \hline x_\bomb & ? & ? \end{abstraction}
\therefore \begin{cases}
    \underset{A_{(A_\geq\setminus B_\leq)_\top}[x:=X,y:=1]}{\rule{15}^\updated} = \begin{rule} \r{\v X{+1}+} && \r{1-} \\ \hline X_\bomb & ? & ? \end{rule} \\
    \remove{\rule{22}, \rule{16}}
\end{cases}
$$

$$
\begin{rcases}
    \rule{12} = \begin{rule} \r{1-} && \r{1+} \\ \hline ?_\sweep & ? & 0 \end{rule}
\end{rcases}
\implies A_{(A_\leq\subsetneq B_\geq)_\bot} := \begin{abstraction}{x} \r{x-} && \r{x+} \\ \hline ?_\sweep & ? & 0 \end{abstraction}
\therefore \begin{cases}
    \underset{A_{(A_\leq\subsetneq B_\geq)_\bot}[x:=X]}{\rule{12}^\updated} = \begin{rule} \r{X-} && \r{X+} \\ \hline ?_\sweep & ? & 0 \end{rule}
\end{cases}
$$

$$
\begin{rcases}
    \rule{18} = \begin{rule} \r3 && \r{1-} \\ \hline 2_\bomb & ? & ? \end{rule} \\
    \rule{20} = \begin{rule} \r2 && \r{1-} \\ \hline 1_\bomb & ? & ? \end{rule} \\
    \rule{21} = \begin{rule} \r5 && \r{1-} \\ \hline 4_\bomb & ? & ? \end{rule}
\end{rcases}
\implies A_{(A\setminus B_\leq)_\top} := \begin{abstraction}{xy} \r{x+y} && \r{y-} \\ \hline x_\bomb & ? & ? \end{abstraction}
\therefore \begin{cases}
    \underset{A_{(A\setminus B_\leq)_\top}[x:=X,y:=1]}{\rule{18}^\updated} = \begin{rule} \r{\v X{+1}} && \r{1-} \\ \hline X_\bomb & ? & ? \end{rule} \\
    \remove{\rule{21}, \rule{20}}
\end{cases}
$$

$$
\begin{rcases}
    \rule{14} = \begin{rule} \r1 && \r{1+} \\ \hline ?_\sweep & ? & 0 \end{rule}
\end{rcases}
\implies A_{(A\subsetneq B_\geq)_\bot} := \begin{abstraction}{x} \r{x} && \r{x+} \\ \hline ?_\sweep & ? & 0 \end{abstraction}
\therefore \begin{cases}
    \underset{A_{(A\subsetneq B_\geq)_\bot}[x:=X]}{\rule{14}} = \begin{rule} \r X && \r{X+} \\ \hline ?_\sweep & ? & 0 \end{rule}
\end{cases}
$$

$$
\begin{rcases}
    \rule{28} = \begin{rule} \r{\or23} && \r1 \\ \hline 1_\bomb & ? & ? \end{rule}
\end{rcases}
\implies A_{(A_\oplus\setminus B)_\top} := \begin{abstraction}{xya} \r{\or{x+y}{x+y+a}} && \r y \\ \hline x_\bomb & ? & ? \end{abstraction}
\therefore \begin{cases}
    \underset{A_{(A_\oplus\setminus B)_\top}[x:=X,y:=1,a:=1]}{\rule{28}^\updated} = \begin{rule} \r{\or{\v X{+1}}{\v X{+2}}} && \r1 \\ \hline X_\bomb & ? & ? \end{rule} \\
    \underset{A_{(A_\oplus\setminus B)_\top}[x:=X,y:=1,a:=2]}{\rule{50}^\new} = \begin{rule} \r{\or{\v X{+1}}{\v X{+3}}} && \r1 \\ \hline X_\bomb & ? & ? \end{rule} \\
    \underset{A_{(A_\oplus\setminus B)_\top}[x:=X,y:=1,a:=2]}{\rule{51}^\new} = \begin{rule} \r{\or{\v X{+1}}{\v X{+4}}} && \r1 \\ \hline X_\bomb & ? & ? \end{rule}
\end{cases}
$$

$$
\begin{rcases}
    \rule{26} = \begin{rule} \r{\or01} && \r1 \\ \hline ?_\sweep & ? & 0 \end{rule}
\end{rcases}
\implies A_{(A_\oplus\subsetneq B)_\bot} := \begin{abstraction}{xa} \r{\or x{x+a}} && \r{x+a} \\ \hline ?_\sweep & ? & 0 \end{abstraction}
\therefore \begin{cases}
    \underset{A_{(A_\oplus\subsetneq B)_\bot}[x:=X,a:=1]}{\rule{26}^\updated} = \begin{rule} \r{\or X{\v X{+1}}} && \r{\v X{+1}} \\ \hline ?_\sweep & ? & 0 \end{rule} \\
    \underset{A_{(A_\oplus\subsetneq B)_\bot}[x:=X,a:=2]}{\rule{52}^\new} = \begin{rule} \r{\or X{\v X{+2}}} && \r{\v X{+2}} \\ \hline ?_\sweep & ? & 0 \end{rule} \\
    \underset{A_{(A_\oplus\subsetneq B)_\bot}[x:=X,a:=3]}{\rule{53}^\new} = \begin{rule} \r{\or X{\v X{+3}}} && \r{\v X{+3}} \\ \hline ?_\sweep & ? & 0 \end{rule}
\end{cases}
$$

$$
\begin{rcases}
    \rule{29} = \begin{rule} \r1 && \r{\or12} \\ \hline ?_\sweep & ? & 0 \end{rule}
\end{rcases}
\implies A_{(A\subsetneq B_\oplus)_\bot} := \begin{abstraction}{xa} \r x && \r{\or x{x+a}} \\ \hline ?_\sweep & ? & 0 \end{abstraction}
\therefore \begin{cases}
    \underset{A_{(A\subsetneq B_\oplus)_\bot}[x:=X,a:=1]}{\rule{29}^\updated} = \begin{rule} \r X && \r{\or X{\v X{+1}}} \\ \hline ?_\sweep & ? & 0 \end{rule} \\
    \underset{A_{(A\subsetneq B_\oplus)_\bot}[x:=X,a:=2]}{\rule{54}^\new} = \begin{rule} \r X && \r{\or X{\v X{+2}}} \\ \hline ?_\sweep & ? & 0 \end{rule} \\
    \underset{A_{(A\subsetneq B_\oplus)_\bot}[x:=X,a:=3]}{\rule{55}^\new} = \begin{rule} \r X && \r{\or X{\v X{+3}}} \\ \hline ?_\sweep & ? & 0 \end{rule}
\end{cases}
$$

$$
\begin{rcases}
    \rule{16} = \begin{rule} \r2 && \r2 \\ \hline ?_\r{\or01} & ? & 1 \end{rule}
\end{rcases}
\implies A_{A\setminus{B_2}} := \begin{abstraction}{x} \r{x+2} && \r2 \\ \hline ?_\r{\or x{x+1}} & ? & 1 \end{abstraction}
\therefore \begin{cases}
    \underset{A_{A\setminus{B_2}}[x:=X]}{\rule{16}} = \begin{rule} \r{\v X{+2}} && \r2 \\ \hline ?_\r{\or X{\v X{+1}}} & ? & 1 \end{rule}
\end{cases}
$$

With the large set of substraction rules generalized, let's perform another auto-run pass to see how far we've come.  We're now about 1800 levels away from our goal.  The hybrid abstractions aren't going to get us there, but we might as well finish out this massive rule cleanup.

$$
\begin{align*}
\begin{rcases}
    \rule7 = \begin{rule} \r1 && \r1 \\ \hline ? & ? & ? \\ ? & ? & ? & 1_\bomb & \r3 \end{rule}
\end{rcases}
&\implies A_{(C\setminus(A\cup B))_\top} := \begin{abstraction}{xyz}
        \r y && \r z \\
        \hline
        ? & ? & ? \\
        ? & ? & ? & x_\bomb & \r{x+y+z}
    \end{abstraction} \\
&\therefore \begin{cases}
    \underset{A_{(C\setminus(A\cup B))_\top}[x:=X,y:=1,z:=1]}{\rule7^\updated} = \begin{rule} \r1 && \r1 \\ \hline ? & ? & ? \\ ? & ? & ? & X_\bomb & \r{\v X{+2}} \end{rule}
\end{cases}
\end{align*}
$$

$$
\begin{align*}
\begin{rcases}
    \rule5 = \begin{rule} \r1 && \r1 \\ \hline ? & ?_\sweep & ? \\ ? & ? & ? & \or12 & \r3 \end{rule} \\
    \rule6 = \begin{rule} \r1 && \r1 \\ \hline ? & ?_\sweep & ? \\ ? & ? & ? & \or01 & \r2 \end{rule}
\end{rcases}
&\implies A_{((A_1\cap B_1)\setminus C)_\bot} := \begin{abstraction}{x}
    \r1 && \r1 \\
    \hline
    ? & ?_\sweep & ? \\
    ? & ? & ? & \or x{x+1} & \r{x+2}
\end{abstraction} \\
&\therefore \begin{cases}
    \underset{A_{((A_1\cap B_1)\setminus C)_\bot}[x:=X]}{\rule5^\updated} = \begin{rule} 
        \r1 && \r1 \\ 
        \hline 
        ? & ?_\sweep & ? \\ 
        ? & ? & ? & \or X{\v X{+1}} & \r{\v X{+2}} 
    \end{rule} \\
    \remove{\rule6}
\end{cases}
\end{align*}
$$

$$
\begin{align*}
\begin{rcases}
    \rule7 = \begin{rule} \r1 && \r1 \\ \hline ?_\sweep & ? & ?_\sweep \\ ? & ? & ? & 0 & \r2 \end{rule}
\end{rcases}
&\implies A_{((A\Delta B)\setminus C)_\bot} := \begin{abstraction}{xyz}
    \r y && \r z \\
    \hline
    ?_\sweep & ? & ?_\sweep \\
    ? & ? & ? & x & \r{x+y+z}
\end{abstraction} \\
&\therefore \begin{cases}
    \underset{A_{((A\Delta B)\setminus C)_\bot}[x:=X,y:=1,z:=1]}{\rule7^\updated} = \begin{rule}
        \r1 && \r1 \\
        \hline
        ?_\sweep & ? & ?_\sweep \\
        ? & ? & ? & X & \r{\v X{+2}}
    \end{rule}
\end{cases}
\end{align*}
$$

$$
\begin{align*}
\begin{rcases}
    \rule{19} = \begin{rule}
        \r1 && \r{1-} \\
        \hline
        ? & ?_\sweep & ? \\
        ? & ? & ? & \or23 & \r{4+}
    \end{rule}
\end{rcases}
&\implies A_{((A_1\cap{B_{\leq1}})\setminus C_\geq)_\bot} := \begin{abstraction}{x}
    \r1 && \r{1-} \\
    \hline
    ? & ?_\sweep & ? \\
    ? & ? & ? & \or x{x+1} & \r{(x+2)+}
\end{abstraction} \\
&\therefore \begin{cases}
    \underset{A_{((A_1\cap{B_{\leq1}})\setminus C_\geq)_\bot}[x:=X]}{\rule{19}^\updated} = \begin{rule}
        \r1 && \r{1-} \\
        \hline
        ? & ?_\sweep & ? \\
        ? & ? & ? & \or X{\v X{+1}} & \r{\v X{+2}+}
    \end{rule}
\end{cases}
\end{align*}
$$

$$
\begin{align*}
\begin{rcases}
    \rule{34} = \begin{rule}
        \r1 && \r1 \\
        \hline
        ? & ?_\sweep & ? \\
        ? & ? & ? & 0 & \r{\or12}
    \end{rule}
\end{rcases}
&\implies A_{((A_1\cap B_1)\setminus C_\oplus)_\bot} := \begin{abstraction}{xa}
    \r1 && \r1 \\
    \hline
    ? & ?_\sweep & ? \\
    ? & ? & ? & x & \r{\or{x+1}{x+a+1}}
\end{abstraction} \\
&\therefore \begin{cases}
    \underset{A_{((A_1\cap B_1)\setminus C_\oplus)_\bot}[x:=X,a:=1]}{\rule{34}^\updated} = \begin{rule}
        \r1 && \r1 \\
        \hline
        ? & ?_\sweep & ? \\
        ? & ? & ? & X & \r{\or{\v X{+1}}{\v x{+2}}}
    \end{rule} \\
    \underset{A_{((A_1\cap B_1)\setminus C_\oplus)_\bot}[x:=X,a:=2]}{\rule{55}^\new} = \begin{rule}
        \r1 && \r1 \\
        \hline
        ? & ?_\sweep & ? \\
        ? & ? & ? & X & \r{\or{\v X{+1}}{\v x{+3}}}
    \end{rule} \\
    \underset{A_{((A_1\cap B_1)\setminus C_\oplus)_\bot}[x:=X,a:=3]}{\rule{56}^\new} = \begin{rule}
        \r1 && \r1 \\
        \hline
        ? & ?_\sweep & ? \\
        ? & ? & ? & X & \r{\or{\v X{+1}}{\v x{+4}}}
    \end{rule}
\end{cases}
\end{align*}
$$

$$
\begin{align*}
\begin{rcases}
    \rule{37} = \begin{rule}
        \r{\or01} && \r1 \\
        \hline
        ?_\sweep & ? & ?_\sweep \\
        ? & ? & ? & 0 & \r{\or23}
    \end{rule}
\end{rcases}
&\implies A_{((A_\oplus\Delta B)\setminus C_\oplus)_\bot} := \begin{abstraction}{xyzab}
    \r{\or y{y+b}} && \r z \\
    \hline
    ?_\sweep & ? & ?_\sweep \\
    ? & ? & ? & x & \r{\or{x+y+z+b}{x+y+z+a+b}}
\end{abstraction} \\
&\therefore \begin{cases}
    \underset{A_{((A_\oplus\Delta B)\setminus C_\oplus)_\bot}[x:=X,y:=0,z:=1,a:=1,b:=1]}{\rule{37}^\updated} = \begin{rule}
        \r{\or01} && \r1 \\
        \hline
        ?_\sweep & ? & ?_\sweep \\
        ? & ? & ? & X & \r{\or{\v X{+2}}{\v X{+3}}}
    \end{rule} \\
    \underset{A_{((A_\oplus\Delta B)\setminus C_\oplus)_\bot}[x:=X,y:=0,z:=1,a:=2,b:=1]}{\rule{57}^\new} = \begin{rule}
        \r{\or01} && \r1 \\
        \hline
        ?_\sweep & ? & ?_\sweep \\
        ? & ? & ? & X & \r{\or{\v X{+2}}{\v X{+4}}}
    \end{rule} \\
    \underset{A_{((A_\oplus\Delta B)\setminus C_\oplus)_\bot}[x:=X,y:=0,z:=1,a:=3,b:=1]}{\rule{58}^\new} = \begin{rule}
        \r{\or01} && \r1 \\
        \hline
        ?_\sweep & ? & ?_\sweep \\
        ? & ? & ? & X & \r{\or{\v X{+2}}{\v X{+5}}}
    \end{rule}
\end{cases}
\end{align*}
$$

$$
\begin{align*}
\begin{rcases}
    \rule{16} = \begin{rule}
        \r1 && \r{2+} \\
        \hline
        ? & ? & 1 \\
        ?_\sweep & ? & ? & ? & \r{\or01}
    \end{rule}
\end{rcases}
&\implies A_{((A\cap B_{\oplus1})\setminus C_\geq)_\bot} := \begin{abstraction}{xyz}
    \r y && \r{(x+y+z)+} \\
    \hline
    ? & ? & x \\
    ?_\sweep & ? & ? & ? & \r{\or z{z+1}}
\end{abstraction} \\
&\therefore \begin{cases}
    \underset{A_{((A\cap B_{\oplus1})\setminus C_\geq)_\bot}[x:=X,y:=1,z:=0]}{\rule{16}^\updated} = \begin{rule}
        \r1 && \r{\v X{+1}+} \\
        \hline
        ? & ? & X \\
        ?_\sweep & ? & ? & ? & \r{\or01}
    \end{rule}
\end{cases}
\end{align*}
$$

Miraculously, these hybrid abstraction rules trim over about 50 more levels off our list.  There's still a ways to go, so we should probably get back to the _actual_ game.

## Level Set S11

We're getting back to basics.

$$
\begin{rcases}
    \rule{S11.66} = &\begin{rule}
        \r3 && \r2 \\
        \hline
        3 & 3 & 0
    \end{rule}
\end{rcases}
\implies \abstraction{A\subsetneq B} := \begin{abstraction}{xy}
    \r{x+y} && \r y \\
    \hline
    (x+1)+_\r x & ? & 0
\end{abstraction} \\
\therefore \begin{cases}
    \underset{\abstraction{A\subsetneq B}[x:=X,y:=2]}{\rule{59}^\new} = &\begin{rule}
        \r{\v X{+2}} && \r2 \\
        \hline
        \v X{+1}+_\r X & ? & 0
    \end{rule}
\end{cases}
$$

$$
\begin{rcases}
    \rule{S11.98} = &\begin{rule}
        \r4 && \r2 \\
        \hline
        2 & 3 & 0
    \end{rule}
\end{rcases}
\implies \abstraction{A\setminus B} := \begin{abstraction}{xy}
    \r{x+y} && \r y \\
    \hline
    x_\bomb & ? & ?
\end{abstraction}
\therefore \begin{cases}
    \underset{\abstraction{A\setminus B}[x:=X,y:=2]}{\rule{60}^\new} = &\begin{rule}
        \r{\v X{+2}} && \r2 \\
        \hline
        X_\bomb & ? & ?
    \end{rule}
\end{cases}
$$

$$
\begin{align*}
\begin{rcases}
    \rule{S11.138} = &\begin{rule}
        \r1 && \r1 \\
        \hline
        0 & 1 & 0 \\
        1 & 1 & 1 & 1 & \r1
    \end{rule}
\end{rcases}
&\implies \abstraction{((A_1\Delta B_1)\cap C_1)_\bot}^\new := \begin{abstraction}{}
    \r1 && \r1 \\
    \hline
    0 & ? & 0 \\
    ?_\sweep & ? & ?_\sweep & ? & \r1
\end{abstraction} \\
&\therefore \begin{cases}
    \underset{\abstraction{((A_1\Delta B_1)\cap C_1)_\bot}}{\rule{61}^\new} = &\begin{rule}
        \r1 && \r1 \\
        \hline
        0 & ? & 0 \\
        ?_\sweep & ? & ?_\sweep & ? & \r1
    \end{rule}
\end{cases}
\end{align*}
$$

These three rules finish out the level set.  Let's perform our usual auto-run passes before moving onto the next level set.

## Level Set S12

We have a bit more cleanup to do as we continue across the first row of square level sets.

$$
\begin{align*}
\begin{rcases}
    \rule{S12.111} = &\begin{rule}
        \r{1+} && \r{1+} \\
        \hline
        0 & 0 & 0 \\
        2 & 0 & 2 & 1 & \r2
    \end{rule}
\end{rcases}
&\implies \abstraction{(A\setminus(A_\oplus \cup B_\oplus))_\bot}^\new := \begin{abstraction}{xy}
    \r{x+} && \r{y+} \\
    \hline
    0 & 0 & 0 \\
    ? & 0 & ? & ?_\sweep & \r{x+y}
\end{abstraction} \\
&\therefore \begin{cases}
    \underset{\abstraction{(A\setminus(A_\oplus \cup B_\oplus))_\bot}[x:=X,y:=1]}{\rule{62}^\new} = &\begin{rule}
        \r{X+} && \r{1+} \\
        \hline
        0 & 0 & 0 \\
        ? & 0 & ? & ?_\sweep & \r{\v X{+1}}
    \end{rule}
\end{cases}
\end{align*}
$$
