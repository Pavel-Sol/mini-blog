// ф-ия для валидация формы
export const checkFormData = (inputText, selectedFile) => {
  if (!inputText) {
    return 'Напишите текст для поста';
  } else if (!selectedFile) {
    return 'Добавьте файл';
  } else if (selectedFile.size > 900000) {
    return 'Слишком большой размер файла';
  }
};
