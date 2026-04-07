---
title: Guide Convensions
---

# Guide Convensions

To aid in understanding structuring this guide, I try to use some general convensions when describing/defining the logic presented.

## Basics

| Term | Symbol(s) | Description |
| ---- | :-------: | ----------- |
| Cell | _N/A_ | A location on a field that can either contain a bomb or be empty |
| Bomb | $\bomb$ | An indication that a cell is known to contain a bomb |
| Empty / Sweep | $\sweep$ | An indication that a cell is known to _not_ contain a bomb |
| Clue | $5$, $3-$, $\parity{2}$, etc. | A proposition about how many of the adjacent cells contain bombs |
| Region | $\r{4}$, $\r{\or02}$, $\r{!\v \Psi{+2}}$, etc. | A collection of cells described by a given clue |
| Subregion | _N/A_ | A subset of a region as defined by the intersections and complements of one or more regions |
| Size | $2$, $?$, $X$, etc. | A description of how many cells are contained within a given subregion |
| Rule | _(multiple representations)_ | A set of region clues and subregion size conditions that trigger an inference |
| Don't Care | $?$ | An indication that a region's clue or a subregion's size doesn't matter and can be any value |
| Field | _N/A_ | A collection of tiled cells that make up a level |
| Level | $H12.43$, $S52.168$, etc. | A predefined field of cells with starting revealed clues |
| Level Set | $H14$, $T31$, etc. | A collection of 200 levels of a similar field type, complexity, and size |

## Values

| Value Type | Symbol(s) | Description |
| ---------- | :-------: | ----------- |
| Values / Constants | $0$, $1$, $2$, $3$, $4$, $5$, $6$, $7$, $8$, $9$ | A static integer value |
| Variables | $X$, $\Psi$, $K$, $\Pi$, $H$ | A placeholder that can contain any value that is reused throughout a rule |
| Variables (abstraction) | $x$, $y$, $z$ | An unofficial placeholder for defining abstraction logic, referring to a value that could be substituted with a variable |
| Variable Constants (abstraction) | $a$, $b$, $c$ | An unofficial placeholder for defining abstraction logic, referring to a value that could be substituted with a constant |

## Clues / Sizes

| Clue / Size Type | Symbol(s) | Description |
| --------- | :-------: | ----------- |
| Constant | $3$, $X$, etc. | The region contains a specific number of bombs; subregion contains a specific number of cells |
| Minimum | $2+$, $\Psi+$, etc. | The region contains at _least_ a number of bombs; subregion contains at _least_ a number of cells |
| Maximum | $5-$, ${\v K{+2}}-$, etc. | The region contains at _most_ a number of bombs; subregion contains at _most_ a number of cells |
| Or | $\or03$, $\oror \Pi{\v \Pi{+1}}{\v \Pi{+2}}$, etc. | The region contains either of two/three numbers of bombs; subregion contains two/or three numbers of cells |
| Parity | $\parity{1}$, $\parity{\v H{+3}}$, etc. | The region contains an even/odd number (at or above a starting point) of bombs; subregion contains an even/odd number (at or above a starting point) of cells |
| Not | $!0$, $!\v X{+\Psi}$, etc. | A region _does not_ contain a specific number of bombs; subregion _does not_ contain a specific number of cells |

## Rule Refernces

| Symbol | Usage |
| :----: | ----- |
| $\rule2$, $\rule{78}$, etc. | Reference to a rule with a given ID |
| $\rule3^\new$, $\rule{43}^\new$, etc. | Reference to a newly created rule that will have a given ID |
| $\rule8^\updated$, $\rule{28}^\updated$, etc. | Reference to an existing rule with a given ID that is changing |
| $\remove{\rule1, \rule{56}}$, etc. | Reference to one or more existing rules with given IDs that are being deleted |
| $\trigger{\rule5}$, etc. | Refrence to one or more existing rules with given IDs that will be automatically triggered |
| $\rule{H13.43}$, $\rule{S44.168_\alpha}$, etc. | Reference to a new rule that is a solution/partial solution for a given level |
