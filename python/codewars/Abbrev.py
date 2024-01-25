def abbrev_name(name:str):
  '''
  Abbreviate a Two Word Name

  Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
  The output should be two capital letters with a dot separating them.

  It should look like this:
  Sam Harris => S.H
  patrick feeney => P.F
  '''
  split_name = name.upper().split(" ")
  return split_name[0][:1] +"."+ split_name[1][:1]

name = "patrick feenan"
# P.F
abbrev_name(name)