import { useState } from "react";
import { axiosInstance } from "../utils";

export function useDatabase(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const getPost = async () => {
    setIsPending(true);
    try {
      const req = await axiosInstance.get(url);
      setData(req.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  };

  const postData = async (payload) => {
    setIsPending(true);
    try {
      const req = await axiosInstance.post(url, payload);
      setData((prev) => (Array.isArray(prev) ? [...prev, req.data] : [req.data]));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  };

  const deletePost = async (id) => {
    setIsPending(true);
    try {
      await axiosInstance.delete(`${url}/${id}`);
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { data, isPending, error, getPost, postData, deletePost };
}
