SELECT ID, FirstName, LastName, Age
FROM maintable_P15K7
WHERE LastName = "Smith" OR FirstName = "Robert"
ORDER BY Age ASC;