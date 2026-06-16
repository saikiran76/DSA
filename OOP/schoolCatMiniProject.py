from enum import Enum
from typing import Union 

class SchoolLevel(str, Enum):
  PRIMARY = 'primary'
  MIDDLE = 'middle'
  HIGH = 'high'

'''
  def __init__(self, name: str, level: str | SchoolLevel, numberOfStudents: int): --> new syntax for python 3.10+
  But for the older versions less than 3.9, need to import Union
'''
class School:
  def __init__(self, name: str, level: Union[str, SchoolLevel], numberOfStudents: int):
    self.name = name
    self._level = level
    self.numberOfStudents = numberOfStudents
  
  def get_name(self):
    return self.name
  def get_level(self):
    return self._level
  def get_numberOfStudents(self):
    return self.numberOfStudents

  def set_numberOfStudents(self, newNumber):
    ## additional validation check with isinstance
    if is_instance(newNumber, int):
      self.numberOfStudents = newNumber

  def __repr__(self):
    return 'A {level} school named {name} with {numberOfStudents}'.format(level = self._level, name = self.name, numberOfStudents = self.numberOfStudents)

class PrimarySchool(School):
  def __init__(self, name, numberOfStudents, pickupPolicy):
    super().__init__(name, "primary", numberOfStudents)
    self.pickupPolicy = pickupPolicy
  def get_pickup(self):
    return self.pickupPolicy
  def __repr__(self):
    super().__repr__()
    return 'the pickup policy is: {policy}'.format(policy = self.pickupPolicy)

class HighSchool(School):
  def __init__(self, name, numberOfStudents, sportsTeams: []):
    super().__init__(name, "high", numberOfStudents)
    self.sportsTeams = sportsTeams
  def get_sportsTeams(self):
    return self.sportsTeams
  def __repr__(self):
    return 'the sports teams are: {sportsTeams}'.format(sportsTeams = self.sportsTeams)
  
schoolObj = School("GA high", 'high', 350)
print(schoolObj.get_level())

primSchoolObj = PrimarySchool("moordale", 400, "mom")
print(primSchoolObj.get_level())
print(primSchoolObj)

highSchoolObj = HighSchool("Moordale High", 300, sportsTeams = ['moordale morons', 'dennale ten team'])
print(highSchoolObj)
