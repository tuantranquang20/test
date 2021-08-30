exports.getUser = async (req, res, next) => {
    try {
        res.json("Thanh cong");
    } catch (error) {
        res.json("That bai");
    }
};
