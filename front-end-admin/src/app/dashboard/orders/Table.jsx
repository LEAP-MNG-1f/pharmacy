export const Table = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Хэрэглэгч</th>
              <th>Үнийн дүн</th>
              <th>Дүүрэг, хороо </th>
              <th>Дэлгэрэнгүй хаяг</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Sarnai</td>
              <td>9000</td>
              <td>Сүхбаатар</td>
              <td>Сүхбаатар</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Badmaa</td>
              <td>87'000</td>
              <td>Сүхбаатар</td>
              <td>Сүхбаатар</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Boloroo</td>
              <td>26'000</td>
              <td>Сүхбаатар</td>
              <td>Сүхбаатар</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>4</th>
              <td>Jawzaa</td>
              <td>126'000</td>
              <td>Сүхбаатар</td>
              <td>Сүхбаатар</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>5</th>
              <td>Buynaa</td>
              <td>46'000</td>
              <td>Сүхбаатар</td>
              <td>Сүхбаатар</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
