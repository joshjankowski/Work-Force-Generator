const Engineer = require('../lib/Engineer');

describe('test github', ()  => {
  const github = "joshjankowski";
  const e = new Engineer("Josh", 123, "email@email.com", github);
  it('should return the github', () => {
    expect(e.getGithub()).toBe(github);
  });});

describe('test role', ()  => {
  const role = "Engineer";
  const e = new Engineer("Josh", 123, "josh@josh.com", role);
  it('should return the role', () => {
    expect(e.getRole()).toBe(role);
  });});
