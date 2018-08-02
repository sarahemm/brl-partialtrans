# brl-partialtrans
Translate text to Braille (UEB only), but only use specific contractions, not all of them.
Useful for learning contractions over time.

Uses liblouis to do the translation, dynamically creating a new translation
table by patching the standard UEB grade 2 table based on the options selected
by the user.

May create some odd non-standard contractions depending on the specific ones
selected, and may break in unexpected ways! It's worth diffing the output with
the input to make sure it's generating something reasonable, before relying on
it.
