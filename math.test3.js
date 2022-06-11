import { app } from './app';
import { api } from './api';

// test ("should call function", () => {
//     const data = [{ name: 'tintin'}];
//     api.fetchAll = jest.fn();
//     api.fetchAll.mockResolvedValue(data);

//     const res = app.fetchUser();
//     expect(api.fetchAll).toHaveBeenCalled();
//     expect(api.fetchAll).toHaveBeenCalledWith('user');
//     return expect(res).resolves.toEqual(data);
// })

test ("should call function", () => {
    const mock = jest.spyOn(api, "fetchAll");
    const data = [{ name: 'tintin'}];
    api.fetchAll = jest.fn();
    api.fetchAll.mockResolvedValue(data);

    const res = app.fetchUser();
    expect(api.fetchAll).toHaveBeenCalled();
    expect(api.fetchAll).toHaveBeenCalledWith('user');
    return expect(res).resolves.toEqual(data);
})