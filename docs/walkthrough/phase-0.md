---
title: Phase 0 (Walkthrough)
---

# Phase 0: The Worst Game of Minesweeper

Welcome to Bombe!  After selecting your language and a quick help tutorial, we reach the real tutorial.

## Level H11.0

The game will walk us through creating our first rule.

!!! tip "Don't Race the Tutorial (...or do)"

    The tutorial markers appear as soon as the level loads, but the region update speed is still set slow.  It will take a few seconds for the region you need to select to show up, but you can double-click the space early and trigger the tutorial to skip ahead.  If that happens, you will need to repeat the steps (but without the tutorial guidance) in order to create the rule.

$$
\begin{rcases}
    \rule{H11.0_\alpha} = \begin{rule} \r0 \\ \hline 1_\sweep \end{rule}
\end{rcases}
\implies A_\bot := \begin{abstraction}{} \r0 \\ \hline ?_\sweep \end{abstraction}
\therefore \begin{cases}
    \underset{A_\bot}{\rule0^\new} = \begin{rule} \r0 \\ \hline 1_\sweep \end{rule}
\end{cases}
$$

Congrats!  We've created our first rule and cleared a cell.  Unfortunately, that rule only applies if a region containing 0 bombs only contains 1 cell.  We will (currently) have to make separate rules for different sizes of regions, so let's do that now.

$$
\begin{rcases}
    \rule{H11.0_\beta} = \begin{rule} \r0 \\ \hline 2_\sweep \end{rule}
\end{rcases}
\implies A_\bot := \begin{abstraction}{} \r0 \\ \hline ?_\sweep \end{abstraction}
\therefore \begin{cases}
    \underset{A_\bot}{\rule1^\new} = \begin{rule} \r0 \\ \hline 2_\sweep \end{rule}
\end{cases}
$$

Okay, we've figured out how to do the sweeping.  Next is the mines -- or were they bombs.  Regardelss, let's mark those.

$$
\begin{rcases}
    \rule{H11.0_\gamma} = \begin{rule} \r1 \\ \hline 1_\bomb \end{rule} \\
    \rule{H11.0_\delta} = \begin{rule} \r2 \\ \hline 2_\bomb \end{rule}
\end{rcases}
\implies A_\top := \begin{abstraction}{x} \r x \\ \hline x_\bomb \end{abstraction}
\therefore \begin{cases}
    \underset{A_\top[x:=1]}{\rule2^\new} = \begin{rule} \r1 \\ \hline 1_\bomb \end{rule} \\
    \underset{A_\top[x:=2]}{\rule3^\new} = \begin{rule} \r2 \\ \hline 2_\bomb \end{rule}
\end{cases}
$$

...and with that, we complete our first level!  Only something like 20000 to go!

## Levels H11.1 & H11.2

And with a new level comes new numbers - 3 and 4 in our case.  We can start by following the same abstractions we used last level.

$$
\begin{rcases}
    \rule{H11.1_\alpha} = \begin{rule} \r3 \\ \hline 3_\bomb \end{rule} \\
    \rule{H11.1_\beta} = \begin{rule} \r4 \\ \hline 4_\bomb \end{rule}
\end{rcases}
\implies A_\top := \begin{abstraction}{x} \r x \\ \hline x_\bomb \end{abstraction}
\therefore \begin{cases}
    \underset{A_\top[x:=3]}{\rule4^\new} = \begin{rule} \r3 \\ \hline 3_\bomb \end{rule} \\
    \underset{A_\top[x:=4]}{\rule5^\new} = \begin{rule} \r4 \\ \hline 4_\bomb \end{rule}
\end{cases}
$$

The first rule, $\rule4$, will complete the level, but we'll see the other, $\rule5$, useful in the next as well.

## Level H11.3

Reaching this level will unlock the speed adjustment.  Do us all a favor and crank that up to max.

We're also back to our old friend, the empty region.  This time, they have -- _gasp_ three cells!  We should fix that.

$$
\begin{rcases}
    \rule{H11.3} = \begin{rule} \r0 \\ \hline 3_\sweep \end{rule}
\end{rcases}
\implies A_\bot := \begin{abstraction}{} \r0 \\ \hline ?_\sweep \end{abstraction}
\therefore \begin{cases}
    \underset{A_\bot}{\rule6^\new} = \begin{rule} \r0 \\ \hline 3_\sweep \end{rule}
\end{cases}
$$

## Level H11.11

The next level returns to our full regions, this time with five bombs.  You should know the drill by now.

$$
\begin{rcases}
    \rule{H11.4} = \begin{rule} \r5 \\ \hline 5_\bomb \end{rule}
\end{rcases}
\implies A_\top := \begin{abstraction}{x} \r x \\ \hline x_\bomb \end{abstraction}
\therefore \begin{cases}
    \underset{A_\top[x:=5]}{\rule7^\new} = \begin{rule} \r5 \\ \hline 5_\bomb \end{rule}
\end{cases}
$$

Completing this previous level will unlock the "don't care" pseudo-value, which will allow us to finally reduce those empty region rules into one matching the abstraction, $A_\bot$.

## Level H11.19

...or at least, it would.  Unfortunately, we have a short guided tutorial on creating multi-region rules to follow first.

$$
\begin{rcases}
    \rule{H11.5_\alpha} = \begin{rule} \r1 && \r5 \\ \hline 2 & 2 & 4_\bomb \end{rule}
\end{rcases}
\implies A_{(A\setminus B)_\top} := \begin{abstraction}{xy} \r{x+y} && \r y \\ \hline x_\bomb & ? & ? \end{abstraction}
\therefore \begin{cases}
    \underset{A_{(A\setminus B)_\top}[x:=4,y:=1]}{\rule8^\new} = \begin{rule} \r1 && \r5 \\ \hline ? & ? & 4_\bomb \end{rule}
\end{cases}
$$

This rule will reduce the five-bomb region down to a one-bomb region, and $1-1=0$, so...

$$
\begin{rcases}
    \rule{H11.5_\beta} = \begin{rule} \r1 && \r1 \\ \hline 2_\sweep & 2 & 0 \end{rule}
\end{rcases}
\implies A_{(A\subsetneq B)_\bot} := \begin{abstraction}{x} \r x && \r x \\ \hline ?_\sweep & ? & 0 \end{abstraction}
\therefore \begin{cases}
    \underset{A_{(A\subsetneq B)_\bot}[x:=1]}{\rule9^\new} = \begin{rule} \r1 && \r1 \\ \hline ?_\sweep & ? & 0 \end{rule}
\end{cases}
$$

Completing this level brings us back to another empty region.

## Rule Cleanup (Empty Regions)

Rather than creating a separate rule for every size of empty region, let's reduce what we've done so far down to just one.  Go into the rules library and make the following updates.

$$
\begin{rcases}
    \rule0 = \begin{rule} \r0 \\ \hline 1_\sweep \end{rule} \\
    \rule1 = \begin{rule} \r0 \\ \hline 2_\sweep \end{rule} \\
    \rule6 = \begin{rule} \r0 \\ \hline 3_\sweep \end{rule} \\
    \rule{H11.6} = \begin{rule} \r4 \\ \hline 4_\sweep \end{rule}
\end{rcases}
\implies A_\bot := \begin{abstraction}{} \r0 \\ \hline ?_\sweep \end{abstraction}
\therefore \begin{cases}
    \underset{A_\bot}{\rule0^\updated} = \begin{rule} \r0 \\ \hline ?_\sweep \end{rule} \\
    \remove{\rule6, \rule1}
\end{cases}
$$

Updating $\rule0$ will also lead to us unlocking the rest of our static value options.

## Level H11.32

This level returns us to subtracting regions...

$$
\begin{rcases}
    \rule{H11.7} = \begin{rule} \r2 && \r1 \\ \hline 1_\bomb & 2 & 1 \end{rule}
\end{rcases}
\implies A_{(A\setminus B)_\top} := \begin{abstraction}{xy} \r{x+y} && \r y \\ \hline x_\bomb & ? & ? \end{abstraction}
\therefore \begin{cases}
    \underset{A_{(A\setminus B)_\top}[x:=1,y:=1]}{\rule8^\new} = \begin{rule} \r2 && \r1 \\ \hline 1_\bomb & ? & ? \end{rule}
\end{cases}
$$

## Level H11.38

...as does this one.

$$
\begin{rcases}
    \rule{H11.8} = \begin{rule} \r3 && \r1 \\ \hline 2_\bomb & 2 & 1 \end{rule}
\end{rcases}
\implies A_{(A\setminus B)_\top} := \begin{abstraction}{xy} \r{x+y} && \r y \\ \hline x_\bomb & ? & ? \end{abstraction}
\therefore \begin{cases}
    \underset{A_{(A\setminus B)_\top}[x:=2,y:=1]}{\rule8^\new} = \begin{rule} \r3 && \r1 \\ \hline 2_\bomb & ? & ? \end{rule}
\end{cases}
$$

Completing this level will unlock the level set selector, marking the end of the tutorial section.
