export function sanitizeInput(input: string){
  // Remove characters that could interfere with the URL structure
  return input.replace(/[%&$@;'"<>#\n\t\r]/g, '');
};