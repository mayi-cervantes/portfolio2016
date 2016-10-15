var tagField = $('input#user_skills');
tagField.tagsinput({
  tagClass: 'label label-default',
  trimValue: true,
});
tagField.tagsinput('add', 'running');
tagField.tagsinput('add', 'jumping');
tagField.tagsinput('add', 'singing');