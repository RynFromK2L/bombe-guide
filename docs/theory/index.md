---
title: Theory
---

# Bombe Theorycrafting

## Abstract

## Introduction

I feel like Bombe is ultimately an education in set and category theory.  At its most basic, the game is about making inferences between the operations on various sets of cells.

**Example.** If you have a region, $\r3$, containing a subregion, $\r2$, you can infer that the portion of the superregion outside the subregion can be treated as its own subregion, $\r1$.  This is because the number of $\bomb$ cells within the region, $\r3$, must be $3$, and the subregion, $\r2$, contains $2 \bomb$ cells; therefore, there must be $1 \bomb$ cells within the remainder of the region.

So, can we take a rigorous approach to this?  Let's start with some foundation.