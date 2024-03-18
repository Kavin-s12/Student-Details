// query handler
export const handleQuery = (filters) => {
  const query = {};

  for (const key in filters) {
    if (filters[key]) {
      if (key === "name") {
        query[key] = new RegExp(filters[key], "i");
      } else if (key === "gender") {
        query[key] = new RegExp(`^${filters[key]}$`, "i");
      } else if (key === "date_of_birth") {
        const { min, max } = filters[key];
        if (min && max) {
          query.date_of_birth = { $gte: new Date(min), $lte: new Date(max) };
        } else if (min) {
          query.date_of_birth = { $gte: new Date(min) };
        } else if (max) {
          query.date_of_birth = { $lte: new Date(max) };
        }
      } else if (
        key === "total_marks" ||
        key === "percentage" ||
        key === "attendance"
      ) {
        const { min, max, equal } = filters[key];
        if (equal) {
          query[key] = equal;
        } else if (min && max) {
          query[key] = { $gte: min, $lte: max };
        } else if (min) {
          query[key] = { $gte: min };
        } else if (max) {
          query[key] = { $lte: max };
        }
      }
    }
  }

  return query;
};
