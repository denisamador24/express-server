const getMethodManager = (req, res, courses) => {
  const language = req.params.language
  const level = req.params.level
  let result

  if(level){
    result = courses.filter(course => course.language === language && course.nivel === level)
  } else {
    result = courses.filter(course => course.language === language)
  }

  if (result.length === 0) {
    return res.status(204).send(`The course was not found ${language}`)
  } 

  if (req.query.order === 'view') {
    result.sort( (a, b) => b.vistas - a.vistas)
  }
  res.json(result)
}

module.exports = getMethodManager