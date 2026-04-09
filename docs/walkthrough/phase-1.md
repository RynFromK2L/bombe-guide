---
title: Phase 1 (Static Rules)
---

# Phase 1: So... Many... Levels...

With the level set selector unlocked, we're opened up to the true objective of the game, complete as many rules as possible.  As our total levels completed increases, we'll unlock more features -- most importantly the variables, $\{X,\Psi,K,\Pi,H\}$, which enable us to create rules closer resembling our abstractions.

Our first variable, $X$ (Chi), is currently nearly _six thousand_ levels away.  This may feel like it's going to take forever, but do take note of how many levels we have left of our first level set.  Each level set contains 200 levels, and we're down to 158.  Yes, our ten rules (and only four abstractions, so far) has completed over forty levels.  The thing is, however, that that's only based on the levels we've _seen_ so far.  There may be more levels that our current rules can complete!

Double-click on the hex tab.  This will trigger an auto-run pass of all unlocked level sets.  This will quickly unlock more level sets, which will also be include in this auto-run pass since they're in the same tab.  As the auto-run pass works it's way through the third level set, we'll also unlock the next tab (square).  You'll also notice that we don't manage to complete any of the levels in the second column on this pass.  The fields get larger as you work your way down the columns, but the clues get more complex as you work your way right across the rows -- and our rules don't yet address that complexity.

Once the auto-run pass completes for the hex level sets, double-click on the square tab to perform a auto-run pass on those as well.  When that pass completes, we'll now be setting at about 4200 levels away from our first variable.  That's already nearly a third of our way there with no added rules yet!

## Level Set H11

After the auto-run, we are left with six levels remaining in the first level set (H11), so let's focus on completing those.

We start off with a situation that appears similar to our previous subtraction abstractions, except the difference isn't full or empty.

$$
\begin{rcases}
    \rule{H11.42} = \begin{rule} \r2 && \r1 \\ \hline 3_\r1 & 2 & 0 \end{rule}
\end{rcases}
\implies A_{B\subsetneq A} := \begin{abstraction}{xy} \r{x+y} && \r y \\ \hline {(x+1)+}_\r x & ? & 0 \end{abstraction}
\therefore \begin{cases}
    \underset{A_{B\subsetneq A}[x:=1,y:=1]}{\rule{10}^\new} = \begin{rule} \r2 && \r1 \\ \hline 2+_\r1 & ? & 0 \end{rule}
\end{cases}
$$

The next level _is_ back to our previous subtraction abstrations, however.

$$
\begin{rcases}
    \rule{H11.74} = \begin{rule} \r4 && \r1 \\ \hline 3_\bomb & 2 & 1 \end{rule}
\end{rcases}
\implies A_{{A/B}_\top} := \begin{abstraction}{xy} \r{x+y} && \r y \\ \hline x_\bomb & ? & ? \end{abstraction}
\therefore \begin{cases}
    \underset{A_{{A/B}_\top}[x:=3,y:=1]}{\rule{11}^\new} = \begin{rule} \r4 && \r1 \\ \hline 3_\bomb & ? & ? \end{rule}
\end{cases}
$$

$$
\begin{rcases}
    \rule{H11.100} = \begin{rule} \r3 && \r1 \\ \hline 3_\r1 & 2 & 0 \end{rule}
\end{rcases}
\implies A_{B\subsetneq A} := \begin{abstraction}{xy} \r{x+y} && \r y \\ \hline {(x+1)+}_\r x & ? & 0 \end{abstraction}
\therefore \begin{cases}
    \underset{A_{B\subsetneq A}[x:=2,y:=1]}{\rule{12}^\new} = \begin{rule} \r3 && \r1 \\ \hline 3+_\r2 & ? & 0 \end{rule}
\end{cases}
$$

Next is a situation where we basically need three regions in our rule if we don't want to create a more complex intermediate regions.

$$
\begin{align*}
\begin{rcases}
    \rule{H11.148} = \begin{rule} \r1 && \r1 \\ \hline 1 & 1_\sweep & 1 \\ 1 & 0 & 1 & 2 & \r3 \end{rule}
\end{rcases}
&\implies A_{{(1_A\cap1_B)/C}_\bot} := \begin{abstraction}{x}
    \r1 && \r1 \\
    \hline
    ? & ?_\sweep & ? \\
    ? & ? & ? & \or x{x+1} & \r{x+2}
\end{abstraction} \\
&\therefore \begin{cases}
    \underset{A_{{(1_A\cap1_B)/C}_\bot}[x:=1]}{\rule{13}^\new} = \begin{rule} \r1 && \r1 \\ \hline ? & ?_\sweep & ? \\ ? & ? & ? & \or12 & \r3 \end{rule}
\end{cases}
\end{align*}
$$

And that rule completes our first level set.  Let's perform auto-run passes on our two tabs before we go onto another level set, bringing us a couple hundred levels closer to our goal.  Level Set H21 is our next closest to completion with 7 levels remaining, so let's work on that one next.

## Level Set H21

Our first level here is the same situation as the last one, so you again know the drill.

$$
\begin{align*}
\begin{rcases}
    \rule{H21.75} = \begin{rule} \r1 && \r1 \\ \hline 0 & 1_\sweep & 0 \\ 1 & 0 & 1 & 1 & \r2 \end{rule}
\end{rcases}
&\implies A_{{(1_A\cap1_B)/C}_\bot} := \begin{abstraction}{x}
    \r1 && \r1 \\
    \hline
    ? & ?_\sweep & ? \\
    ? & ? & ? & \or x{x+1} & \r{x+2}
\end{abstraction} \\
&\therefore \begin{cases}
    \underset{A_{{(1_A\cap1_B)/C}_\bot}[x:=0]}{\rule{14}^\new} = \begin{rule} \r1 && \r1 \\ \hline ? & ?_\sweep & ? \\ ? & ? & ? & \or01 & \r2 \end{rule}
\end{cases}
\end{align*}
$$

The next level is similar, but we can shift our focus on the bomb side.

$$
\begin{align*}
\begin{rcases}
    \rule{H21.85} = \begin{rule} \r1 && \r1 \\ \hline 1 & 0 & 1 \\ 2 & 0 & 2 & 1_\bomb \end{rule}
\end{rcases}
&\implies A_{{C/(A\cup B)}_\top} := \begin{abstraction}{xyz}
    \r y && \r z \\
    \hline
    ? & ? & ? \\
    ? & ? & ? & x_\bomb & \r{x+y+z}
\end{abstraction} \\
&\therefore \begin{cases}
    \underset{A_{{C/(A\cup B)}_\top}[x:=1,y:=1,z:=1]}{\rule{15}^\new} = \begin{rule} \r1 && \r1 \\ \hline ? & ? & ? \\ ? & ? & ? & 1_\bomb & \r3 \end{rule}
\end{cases}
\end{align*}
$$

$$
\begin{align*}
\begin{rcases}
    \rule{H21.85} = \begin{rule} \r1 && \r1 \\ \hline 1 & 0 & 1 \\ 2 & 0 & 2 & 1_\bomb \end{rule}
\end{rcases}
&\implies A_{{(A\Delta B)/C}_\bot} := \begin{abstraction}{xyz}
    \r y && \r z \\
    \hline
    ?_\sweep & ? & ?_\sweep \\
    ? & ? & ? & x & \r{x+y+z}
\end{abstraction} \\
&\therefore \begin{cases}
    \underset{A_{{(A\Delta B)/C}_\bot}[x:=0,y:=1,z:=1]}{\rule{16}^\new} = \begin{rule} \r1 && \r1 \\ \hline ?_\sweep & ? & ?_\sweep \\ ? & ? & ? & 0 & \r2 \end{rule}
\end{cases}
\end{align*}
$$

Following that level, we're met by our old friend, a full region!

$$
\begin{rcases}
    \rule{H21.95} = \begin{rule} \r6 \\ \hline 6_\bomb \end{rule}
\end{rcases}
\implies A_\top := \begin{abstraction}{x} \r x \\ \hline x_\bomb \end{abstraction}
\therefore \begin{cases}
    \underset{A_\top[x:=6]}{\rule{17}^\new} = \begin{rule} \r6 \\ \hline 6_\bomb \end{rule}
\end{cases}
$$

Our last level of this set is an interesting case.  We can determine that the two ends of the chain of single-bomb regions that overlaps the three-bomb region must contain two bombs, but that rule would require five regions which is not allowed.  Instead, we can make a smaller inferrence regarding the chain of regions (sometimes called a "wire" by players).

$$
\begin{rcases}
    \rule{H21.195} = \begin{rule} \r1 && \r1 \\ \hline 1_\r1 & 0 & 1_\r1 \\ 1 & 0 & 1 & 0 & \r1 \end{rule}
\end{rcases}
\implies A_{\leftrightsquigarrow_1} := \begin{abstraction}{} \r1 && \r1 \\ \hline ?_\r1 & ? & ?_\r1 \\ ? & 0 & ? & 0 & \r1 \end{abstraction}
\therefore \begin{cases}
    \underset{A_{\leftrightsquigarrow_1}}{\rule{18}^\new} = \begin{rule} \r1 && \r1 \\ \hline ?_\r1 & ? & ?_\r1 \\ ? & 0 & ? & 0 & \r1 \end{rule}
\end{cases}
$$

And with that, we have a second level set completed.  Let's perform auto-run passes of our two tabs before moving on.  While this does bring us about a hundred levels closer to our goal, our progress is really slowing down and we still haven't completed one level from the second column.  Let's start fixing that.

## Level Set H12

The second column of level sets introduces minimum (e.g. $2+$) and maximum (e.g. $0-$) clues.  In face, one of these first regions, $\r{0-}$ is effectively the same thing as its constant cousin, $\r{0}$.

$$
\begin{rcases}
    \rule{H12.0_\alpha} = \begin{rule} \r{0-} \\ \hline 3_\sweep \end{rule}
\end{rcases}
\implies A_{\bot_\lt} = \begin{abstraction}{} \r{0-} \\ \hline ?_\sweep \end{abstraction}
\therefore \begin{cases}
    \underset{A_{\bot_\lt}}{\rule{19}^\new} = \begin{rule} \r{0-} \\ \hline ?_\sweep \end{rule}
\end{cases}
$$

And likewise, we're left with the static full region's minimum cousin.

$$
\begin{rcases}
    \rule{H12.0_\beta} = \begin{rule} \r{2+} \\ \hline 2_\bomb \end{rule}
\end{rcases}
\implies A_{\top_\gt} = \begin{abstraction}{x} \r{x+} \\ \hline x_\bomb \end{abstraction}
\therefore \begin{cases}
    \underset{A_{\top_\gt}[x:=2]}{\rule{20}^\new} = \begin{rule} \r{2+} \\ \hline 2_\bomb \end{rule}
\end{cases}
$$
