import * as React from 'react';
import { Breadcrumb } from '@/components/ui/breadcrumb';

export type ProjectsListProps = {};

export const ProjectsList = (props: ProjectsListProps) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 bg-white dark:bg-gray-900">
        <div className="col-span-full mx-4 mt-4 items-center justify-between sm:flex">
          <div className="mb-4 sm:mb-0">
            <Breadcrumb />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              All Projects
            </h1>
          </div>
          <button
            type="button"
            id="newProjectButton"
            data-modal-target="newProjectModal"
            data-modal-toggle="newProjectModal"
            className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
          >
            <svg
              className="-ms-0.5 me-1.5 h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14m-7 7V5"
              />
            </svg>
            Add new project
          </button>
        </div>
        <div className="relative col-span-full">
          <div className="px-4">
            <div className="grid w-full grid-cols-2 gap-4 pb-4 md:grid-cols-3 lg:grid-cols-6">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Search for projects"
                />
              </div>
              <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                <option selected>Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                <option selected>Number of users</option>
                <option value="1">1</option>
                <option value="5">1-5</option>
                <option value="10">5-10</option>
                <option value="20">10-20</option>
              </select>
              <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                <option selected>Progress</option>
                <option value="done">Done</option>
                <option value="almost-done">Almost done</option>
                <option value="half-done">Half done</option>
                <option value="just-started">Just started</option>
              </select>
              <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 md:col-span-1">
                <option selected>Preview link</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 md:col-span-1">
                <option selected>Due date</option>
                <option value="day">This day</option>
                <option value="week">This week</option>
                <option value="month">This month</option>
              </select>
            </div>
            <div className="block w-full items-center justify-between border-t py-3 dark:border-gray-800 sm:flex border-gray-200">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  Show:
                </div>
                <div className="flex items-center">
                  <input
                    id="all-users"
                    type="radio"
                    value=""
                    name="show-only"
                    checked
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label
                    htmlFor="all-users"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    All
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="sort-role"
                    type="radio"
                    value=""
                    name="show-only"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label
                    htmlFor="sort-role"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Completed
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="sort-type"
                    type="radio"
                    value=""
                    name="show-only"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label
                    htmlFor="sort-type"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    In progress
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="sort-status"
                    type="radio"
                    value=""
                    name="show-only"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label
                    htmlFor="sort-status"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    In review
                  </label>
                </div>
              </div>
              <div className="mt-4 sm:mt-0">
                <button
                  id="actionsDropdownButton"
                  data-dropdown-toggle="actionsDropdown"
                  className=" flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                  type="button"
                >
                  Actions
                  <svg
                    className="-me-0.5 ms-1.5 h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id="actionsDropdown"
                  className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700"
                >
                  <ul
                    className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                    aria-labelledby="actionsDropdownButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Suspend all
                      </a>
                    </li>
                    <li>
                      <button
                        type="button"
                        id="deleteAllProjectsModalButton"
                        data-modal-target="deleteAllProjectsModal"
                        data-modal-toggle="deleteAllProjectsModal"
                        className="inline-flex w-full items-center rounded-md px-3 py-2 text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                      >
                        Delete all
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto relative">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label htmlFor="checkbox-all" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Status
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Users
                  </th>
                  <th scope="col" className="min-w-56 px-4 py-3 font-semibold">
                    Progress
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Preview
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Time Tracking
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Due Date
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 border-gray-200">
                  <td className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()}
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th scope="row" className="whitespace-nowrap px-4 py-2">
                    <a
                      href="../project-summary"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      Upload feed and Reels in Instagram
                    </a>
                  </th>
                  <td className="whitespace-nowrap px-4 py-2">
                    <span className="rounded-sm bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                      In progress
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <img
                        src="/images/users/avatar-10.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-1.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-3.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <a
                        href="#"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                      >
                        +5
                      </a>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        75%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-1.5 rounded-full bg-primary-600"
                        style={{ width: '75%' }}
                      ></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    <a
                      href="#"
                      className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      <svg
                        className="mr-1 h-3.5 w-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2"
                        />
                      </svg>
                      Website
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white">
                    <div className="inline-flex items-center rounded-lg border bg-white py-1 pe-1 ps-2 text-xs font-medium dark:border-gray-600 dark:bg-gray-700 border-gray-200">
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="text-green-500">6:47</span>
                      /8:00
                      <button className="ml-3 rounded-md bg-orange-500 p-1 text-white hover:bg-orange-700">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8Zm7 0a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">
                    23 Nov 2025
                  </td>
                  <td className="px-4 py-2">
                    <button
                      id="project-dropdown-button"
                      type="button"
                      data-dropdown-toggle="project-dropdown"
                      className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="4"
                          d="M6 12h0m6 0h0m6 0h0"
                        />
                      </svg>
                    </button>
                    <div
                      id="project-dropdown"
                      className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                        aria-labelledby="project-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            id="editProjectButton"
                            data-modal-target="editProjectModal"
                            data-modal-toggle="editProjectModal"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <a
                            href="../project-summary"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            View
                          </a>
                        </li>
                      </ul>
                      <div className="p-2">
                        <button
                          type="button"
                          id="deleteProjectButton"
                          data-modal-target="deleteProjectModal"
                          data-modal-toggle="deleteProjectModal"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                        >
                          <svg
                            className="me-1.5 h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 border-gray-200">
                  <td className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()}
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th scope="row" className="whitespace-nowrap px-4 py-2">
                    <a
                      href="../project-summary"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      Crossplatform analysis
                    </a>
                  </th>
                  <td className="whitespace-nowrap px-4 py-2">
                    <span className="rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      Completed
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <img
                        src="/images/users/avatar-6.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-7.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-2.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <a
                        href="#"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                      >
                        +2
                      </a>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        100%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-1.5 rounded-full bg-green-500"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    <a
                      href="#"
                      className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      <svg
                        className="me-1 h-3.5 w-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2"
                        />
                      </svg>
                      Website
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white">
                    <div className="inline-flex items-center rounded-lg border bg-white py-1 pe-1 ps-2 text-xs font-medium dark:border-gray-600 dark:bg-gray-700 border-gray-200">
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      7:00
                      <button className="ml-3 rounded-md bg-green-500 p-1 text-white hover:bg-green-700">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">
                    03 Nov 2025
                  </td>
                  <td className="px-4 py-2">
                    <button
                      id="project-2-dropdown-button"
                      type="button"
                      data-dropdown-toggle="project-2-dropdown"
                      className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="4"
                          d="M6 12h0m6 0h0m6 0h0"
                        />
                      </svg>
                    </button>
                    <div
                      id="project-2-dropdown"
                      className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                        aria-labelledby="project-2-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            id="editProjectButton"
                            data-modal-target="editProjectModal"
                            data-modal-toggle="editProjectModal"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <a
                            href="../project-summary"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            View
                          </a>
                        </li>
                      </ul>
                      <div className="p-2">
                        <button
                          type="button"
                          id="deleteProjectButton"
                          data-modal-target="deleteProjectModal"
                          data-modal-toggle="deleteProjectModal"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                        >
                          <svg
                            className="me-1.5 h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 border-gray-200">
                  <td className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()}
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th scope="row" className="whitespace-nowrap px-4 py-2">
                    <a
                      href="../project-summary"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      Product features analysis
                    </a>
                  </th>
                  <td className="whitespace-nowrap px-4 py-2">
                    <span className="rounded-sm bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                      In progress
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <img
                        src="/images/users/avatar-8.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-1.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-3.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        50%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-1.5 rounded-full bg-primary-600"
                        style={{ width: '50%' }}
                      ></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    <a
                      href="#"
                      className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      <svg
                        className="mr-1 h-3.5 w-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2"
                        />
                      </svg>
                      Website
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white">
                    <div className="inline-flex items-center rounded-lg border bg-white py-1 pe-1 ps-2 text-xs font-medium dark:border-gray-600 dark:bg-gray-700 border-gray-200">
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="text-green-500">3:25</span>
                      /8:00
                      <button className="ml-3 rounded-md bg-orange-500 p-1 text-white hover:bg-orange-700">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8Zm7 0a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">
                    Yesterday
                  </td>
                  <td className="px-4 py-2">
                    <button
                      id="project-3-dropdown-button"
                      type="button"
                      data-dropdown-toggle="project-3-dropdown"
                      className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="4"
                          d="M6 12h0m6 0h0m6 0h0"
                        />
                      </svg>
                    </button>
                    <div
                      id="project-3-dropdown"
                      className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                        aria-labelledby="project-3-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            id="editProjectButton"
                            data-modal-target="editProjectModal"
                            data-modal-toggle="editProjectModal"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <a
                            href="../project-summary"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            View
                          </a>
                        </li>
                      </ul>
                      <div className="p-2">
                        <button
                          type="button"
                          id="deleteProjectButton"
                          data-modal-target="deleteProjectModal"
                          data-modal-toggle="deleteProjectModal"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                        >
                          <svg
                            className="me-1.5 h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 border-gray-200">
                  <td className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()}
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th scope="row" className="whitespace-nowrap px-4 py-2">
                    <a
                      href="../project-summary"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      Create user story
                    </a>
                  </th>
                  <td className="whitespace-nowrap px-4 py-2">
                    <span className="rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      Completed
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <img
                        src="/images/users/avatar-2.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-1.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-5.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        100%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-1.5 rounded-full bg-green-500"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    <span className="me-2 rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      None
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white">
                    <div className="inline-flex items-center rounded-lg border bg-white py-1 pe-1 ps-2 text-xs font-medium dark:border-gray-600 dark:bg-gray-700 border-gray-200">
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      8:00
                      <button className="ms-3 rounded-md bg-green-500 p-1 text-white hover:bg-green-700">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">
                    23 Nov 2025
                  </td>
                  <td className="px-4 py-2">
                    <button
                      id="project-4-dropdown-button"
                      type="button"
                      data-dropdown-toggle="project-4-dropdown"
                      className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="4"
                          d="M6 12h0m6 0h0m6 0h0"
                        />
                      </svg>
                    </button>
                    <div
                      id="project-4-dropdown"
                      className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                        aria-labelledby="project-4-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            id="editProjectButton"
                            data-modal-target="editProjectModal"
                            data-modal-toggle="editProjectModal"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <a
                            href="../project-summary"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            View
                          </a>
                        </li>
                      </ul>
                      <div className="p-2">
                        <button
                          type="button"
                          id="deleteProjectButton"
                          data-modal-target="deleteProjectModal"
                          data-modal-toggle="deleteProjectModal"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                        >
                          <svg
                            className="me-1.5 h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 border-gray-200">
                  <td className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()}
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th scope="row" className="whitespace-nowrap px-4 py-2">
                    <a
                      href="../project-summary"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      Users profile update
                    </a>
                  </th>
                  <td className="whitespace-nowrap px-4 py-2">
                    <span className="rounded-sm bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                      In progress
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <img
                        src="/images/users/avatar-10.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-1.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-5.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <a
                        href="#"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                      >
                        +2
                      </a>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        20%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-1.5 rounded-full bg-primary-600"
                        style={{ width: '20%' }}
                      ></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    <a
                      href="#"
                      className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      <svg
                        className="mr-1 h-3.5 w-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2"
                        />
                      </svg>
                      Website
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white">
                    <div className="inline-flex items-center rounded-lg border bg-white py-1 pe-1 ps-2 text-xs font-medium dark:border-gray-600 dark:bg-gray-700 border-gray-200">
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="text-green-500">4:21</span>
                      /8:00
                      <button className="ml-3 rounded-md bg-orange-500 p-1 text-white hover:bg-orange-700">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8Zm7 0a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">
                    Yesterday
                  </td>
                  <td className="px-4 py-2">
                    <button
                      id="project-5-dropdown-button"
                      type="button"
                      data-dropdown-toggle="project-5-dropdown"
                      className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="4"
                          d="M6 12h0m6 0h0m6 0h0"
                        />
                      </svg>
                    </button>
                    <div
                      id="project-5-dropdown"
                      className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                        aria-labelledby="project-5-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            id="editProjectButton"
                            data-modal-target="editProjectModal"
                            data-modal-toggle="editProjectModal"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <a
                            href="../project-summary"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            View
                          </a>
                        </li>
                      </ul>
                      <div className="p-2">
                        <button
                          type="button"
                          id="deleteProjectButton"
                          data-modal-target="deleteProjectModal"
                          data-modal-toggle="deleteProjectModal"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                        >
                          <svg
                            className="me-1.5 h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 border-gray-200">
                  <td className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()}
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th scope="row" className="whitespace-nowrap px-4 py-2">
                    <a
                      href="../project-summary"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      User flow update
                    </a>
                  </th>
                  <td className="whitespace-nowrap px-4 py-2">
                    <span className="rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      Completed
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <img
                        src="/images/users/avatar-6.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-7.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-3.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        100%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-1.5 rounded-full bg-green-500"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    <span className="me-2 rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      None
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white">
                    <div className="inline-flex items-center rounded-lg border bg-white py-1 pe-1 ps-2 text-xs font-medium dark:border-gray-600 dark:bg-gray-700 border-gray-200">
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      7:00
                      <button className="ms-3 rounded-md bg-green-500 p-1 text-white hover:bg-green-700">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">
                    23 Oct 2025
                  </td>
                  <td className="px-4 py-2">
                    <button
                      id="project-6-dropdown-button"
                      type="button"
                      data-dropdown-toggle="project-6-dropdown"
                      className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="4"
                          d="M6 12h0m6 0h0m6 0h0"
                        />
                      </svg>
                    </button>
                    <div
                      id="project-6-dropdown"
                      className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                        aria-labelledby="project-6-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            id="editProjectButton"
                            data-modal-target="editProjectModal"
                            data-modal-toggle="editProjectModal"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <a
                            href="../project-summary"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            View
                          </a>
                        </li>
                      </ul>
                      <div className="p-2">
                        <button
                          type="button"
                          id="deleteProjectButton"
                          data-modal-target="deleteProjectModal"
                          data-modal-toggle="deleteProjectModal"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                        >
                          <svg
                            className="me-1.5 h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 border-gray-200">
                  <td className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()}
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th scope="row" className="whitespace-nowrap px-4 py-2">
                    <a
                      href="../project-summary"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      Update design system
                    </a>
                  </th>
                  <td className="whitespace-nowrap px-4 py-2">
                    <span className="rounded-sm bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                      In review
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <img
                        src="/images/users/avatar-10.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-1.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        100%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-1.5 rounded-full bg-yellow-300"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    <span className="me-2 rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      None
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white">
                    <div className="inline-flex items-center rounded-lg border bg-white py-1 pe-1 ps-2 text-xs font-medium dark:border-gray-600 dark:bg-gray-700 border-gray-200">
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      7:00
                      <button className="ms-3 rounded-md bg-green-500 p-1 text-white hover:bg-green-700">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">
                    02 Now 2025
                  </td>
                  <td className="px-4 py-2">
                    <button
                      id="project-7-dropdown-button"
                      type="button"
                      data-dropdown-toggle="project-7-dropdown"
                      className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="4"
                          d="M6 12h0m6 0h0m6 0h0"
                        />
                      </svg>
                    </button>
                    <div
                      id="project-7-dropdown"
                      className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                        aria-labelledby="project-7-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            id="editProjectButton"
                            data-modal-target="editProjectModal"
                            data-modal-toggle="editProjectModal"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <a
                            href="../project-summary"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            View
                          </a>
                        </li>
                      </ul>
                      <div className="p-2">
                        <button
                          type="button"
                          id="deleteProjectButton"
                          data-modal-target="deleteProjectModal"
                          data-modal-toggle="deleteProjectModal"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                        >
                          <svg
                            className="me-1.5 h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 border-gray-200">
                  <td className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()}
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th scope="row" className="whitespace-nowrap px-4 py-2">
                    <a
                      href="../project-summary"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      Create a new logo
                    </a>
                  </th>
                  <td className="whitespace-nowrap px-4 py-2">
                    <span className="rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      Completed
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <img
                        src="/images/users/avatar-2.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-1.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-3.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <a
                        href="#"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                      >
                        +2
                      </a>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        100%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-1.5 rounded-full bg-green-500"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    <a
                      href="#"
                      className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      <svg
                        className="mr-1 h-3.5 w-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2"
                        />
                      </svg>
                      Website
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white">
                    <div className="inline-flex items-center rounded-lg border bg-white py-1 pe-1 ps-2 text-xs font-medium dark:border-gray-600 dark:bg-gray-700 border-gray-200">
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      5:00
                      <button className="ms-3 rounded-md bg-green-500 p-1 text-white hover:bg-green-700">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">
                    30 Oct 2025
                  </td>
                  <td className="px-4 py-2">
                    <button
                      id="project-1-dropdown-button"
                      type="button"
                      data-dropdown-toggle="project-1-dropdown"
                      className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="4"
                          d="M6 12h0m6 0h0m6 0h0"
                        />
                      </svg>
                    </button>
                    <div
                      id="project-1-dropdown"
                      className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                        aria-labelledby="project-1-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            id="editProjectButton"
                            data-modal-target="editProjectModal"
                            data-modal-toggle="editProjectModal"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <a
                            href="../project-summary"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            View
                          </a>
                        </li>
                      </ul>
                      <div className="p-2">
                        <button
                          type="button"
                          id="deleteProjectButton"
                          data-modal-target="deleteProjectModal"
                          data-modal-toggle="deleteProjectModal"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                        >
                          <svg
                            className="me-1.5 h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 border-gray-200">
                  <td className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()}
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th scope="row" className="whitespace-nowrap px-4 py-2">
                    <a
                      href="../project-summary"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      Screen structure
                    </a>
                  </th>
                  <td className="whitespace-nowrap px-4 py-2">
                    <span className="rounded-sm bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                      In review
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <img
                        src="/images/users/avatar-8.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-1.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        100%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-1.5 rounded-full bg-yellow-300"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    <a
                      href="#"
                      className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      <svg
                        className="mr-1 h-3.5 w-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2"
                        />
                      </svg>
                      Website
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white">
                    <div className="inline-flex items-center rounded-lg border bg-white py-1 pe-1 ps-2 text-xs font-medium dark:border-gray-600 dark:bg-gray-700 border-gray-200">
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      2:00
                      <button className="ms-3 rounded-md bg-green-500 p-1 text-white hover:bg-green-700">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">
                    23 Nov 2025
                  </td>
                  <td className="px-4 py-2">
                    <button
                      id="project-8-dropdown-button"
                      type="button"
                      data-dropdown-toggle="project-8-dropdown"
                      className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="4"
                          d="M6 12h0m6 0h0m6 0h0"
                        />
                      </svg>
                    </button>
                    <div
                      id="project-8-dropdown"
                      className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                        aria-labelledby="project-8-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            id="editProjectButton"
                            data-modal-target="editProjectModal"
                            data-modal-toggle="editProjectModal"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <a
                            href="../project-summary"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            View
                          </a>
                        </li>
                      </ul>
                      <div className="p-2">
                        <button
                          type="button"
                          id="deleteProjectButton"
                          data-modal-target="deleteProjectModal"
                          data-modal-toggle="deleteProjectModal"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                        >
                          <svg
                            className="me-1.5 h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 border-gray-200">
                  <td className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()}
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th scope="row" className="whitespace-nowrap px-4 py-2">
                    <a
                      href="../project-summary"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      Implement GPT 3.0 in Flowbite
                    </a>
                  </th>
                  <td className="whitespace-nowrap px-4 py-2">
                    <span className="rounded-sm bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                      In progress
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <img
                        src="/images/users/avatar-10.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-1.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-5.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <a
                        href="#"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                      >
                        +2
                      </a>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        25%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-1.5 rounded-full bg-primary-600"
                        style={{ width: '25%' }}
                      ></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    <span className="me-2 rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      None
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white">
                    <div className="inline-flex items-center rounded-lg border bg-white py-1 pe-1 ps-2 text-xs font-medium dark:border-gray-600 dark:bg-gray-700 border-gray-200">
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="text-green-500">3:11</span>
                      /8:00
                      <button className="ml-3 rounded-md bg-orange-500 p-1 text-white hover:bg-orange-700">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8Zm7 0a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">
                    Today
                  </td>
                  <td className="px-4 py-2">
                    <button
                      id="project-10-dropdown-button"
                      type="button"
                      data-dropdown-toggle="project-10-dropdown"
                      className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="4"
                          d="M6 12h0m6 0h0m6 0h0"
                        />
                      </svg>
                    </button>
                    <div
                      id="project-10-dropdown"
                      className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                        aria-labelledby="project-10-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            id="editProjectButton"
                            data-modal-target="editProjectModal"
                            data-modal-toggle="editProjectModal"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <a
                            href="../project-summary"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            View
                          </a>
                        </li>
                      </ul>
                      <div className="p-2">
                        <button
                          type="button"
                          id="deleteProjectButton"
                          data-modal-target="deleteProjectModal"
                          data-modal-toggle="deleteProjectModal"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                        >
                          <svg
                            className="me-1.5 h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 border-gray-200">
                  <td className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()}
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                  >
                    <a
                      href="../project-summary"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      User flow update
                    </a>
                  </th>
                  <td className="whitespace-nowrap px-4 py-2">
                    <span className="rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      Completed
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <img
                        src="/images/users/avatar-6.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-7.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-3.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        100%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-1.5 rounded-full bg-green-500"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    <span className="me-2 rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      None
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white">
                    <div className="inline-flex items-center rounded-lg border bg-white py-1 pe-1 ps-2 text-xs font-medium dark:border-gray-600 dark:bg-gray-700 border-gray-200">
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      7:00
                      <button className="ms-3 rounded-md bg-green-500 p-1 text-white hover:bg-green-700">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">
                    23 Oct 2025
                  </td>
                  <td className="px-4 py-2">
                    <button
                      id="project-11-dropdown-button"
                      type="button"
                      data-dropdown-toggle="project-11-dropdown"
                      className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="4"
                          d="M6 12h0m6 0h0m6 0h0"
                        />
                      </svg>
                    </button>
                    <div
                      id="project-11-dropdown"
                      className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                        aria-labelledby="project-11-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            id="editProjectButton"
                            data-modal-target="editProjectModal"
                            data-modal-toggle="editProjectModal"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <a
                            href="../project-summary"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            View
                          </a>
                        </li>
                      </ul>
                      <div className="p-2">
                        <button
                          type="button"
                          id="deleteProjectButton"
                          data-modal-target="deleteProjectModal"
                          data-modal-toggle="deleteProjectModal"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                        >
                          <svg
                            className="me-1.5 h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 border-gray-200">
                  <td className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()}
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                  >
                    <a
                      href="../project-summary"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      Update design system
                    </a>
                  </th>
                  <td className="whitespace-nowrap px-4 py-2">
                    <span className="rounded-sm bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                      In review
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <img
                        src="/images/users/avatar-10.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-1.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        100%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-1.5 rounded-full bg-yellow-300"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    <span className="me-2 rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      None
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white">
                    <div className="inline-flex items-center rounded-lg border bg-white py-1 pe-1 ps-2 text-xs font-medium dark:border-gray-600 dark:bg-gray-700 border-gray-200">
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      7:00
                      <button className="ms-3 rounded-md bg-green-500 p-1 text-white hover:bg-green-700">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">
                    02 Now 2025
                  </td>
                  <td className="px-4 py-2">
                    <button
                      id="project-12-dropdown-button"
                      type="button"
                      data-dropdown-toggle="project-12-dropdown"
                      className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="4"
                          d="M6 12h0m6 0h0m6 0h0"
                        />
                      </svg>
                    </button>
                    <div
                      id="project-12-dropdown"
                      className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                        aria-labelledby="project-12-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            id="editProjectButton"
                            data-modal-target="editProjectModal"
                            data-modal-toggle="editProjectModal"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <a
                            href="../project-summary"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            View
                          </a>
                        </li>
                      </ul>
                      <div className="p-2">
                        <button
                          type="button"
                          id="deleteProjectButton"
                          data-modal-target="deleteProjectModal"
                          data-modal-toggle="deleteProjectModal"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                        >
                          <svg
                            className="me-1.5 h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 border-gray-200">
                  <td className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()}
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                  >
                    <a
                      href="../project-summary"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      Create a new logo
                    </a>
                  </th>
                  <td className="whitespace-nowrap px-4 py-2">
                    <span className="rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      Completed
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <img
                        src="/images/users/avatar-2.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-1.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-3.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <a
                        href="#"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                      >
                        +2
                      </a>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        100%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-1.5 rounded-full bg-green-500"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    <a
                      href="#"
                      className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      <svg
                        className="mr-1 h-3.5 w-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2"
                        />
                      </svg>
                      Website
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white">
                    <div className="inline-flex items-center rounded-lg border bg-white py-1 pe-1 ps-2 text-xs font-medium dark:border-gray-600 dark:bg-gray-700 border-gray-200">
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      5:00
                      <button className="ms-3 rounded-md bg-green-500 p-1 text-white hover:bg-green-700">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">
                    30 Oct 2025
                  </td>
                  <td className="px-4 py-2">
                    <button
                      id="project-13-dropdown-button"
                      type="button"
                      data-dropdown-toggle="project-13-dropdown"
                      className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="4"
                          d="M6 12h0m6 0h0m6 0h0"
                        />
                      </svg>
                    </button>
                    <div
                      id="project-13-dropdown"
                      className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                        aria-labelledby="project-13-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            id="editProjectButton"
                            data-modal-target="editProjectModal"
                            data-modal-toggle="editProjectModal"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <a
                            href="../project-summary"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            View
                          </a>
                        </li>
                      </ul>
                      <div className="p-2">
                        <button
                          type="button"
                          id="deleteProjectButton"
                          data-modal-target="deleteProjectModal"
                          data-modal-toggle="deleteProjectModal"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                        >
                          <svg
                            className="me-1.5 h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 border-gray-200">
                  <td className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()}
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                  >
                    <a
                      href="../project-summary"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      Refactor Flowbite React Library
                    </a>
                  </th>
                  <td className="whitespace-nowrap px-4 py-2">
                    <span className="rounded-sm bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                      In progress
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <img
                        src="/images/users/avatar-8.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-1.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        80%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-1.5 rounded-full bg-yellow-300"
                        style={{ width: '80%' }}
                      ></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    <a
                      href="#"
                      className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      <svg
                        className="mr-1 h-3.5 w-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2"
                        />
                      </svg>
                      Website
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white">
                    <div className="inline-flex items-center rounded-lg border bg-white py-1 pe-1 ps-2 text-xs font-medium dark:border-gray-600 dark:bg-gray-700 border-gray-200">
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      2:00
                      <button className="ms-3 rounded-md bg-green-500 p-1 text-white hover:bg-green-700">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">
                    23 Nov 2025
                  </td>
                  <td className="px-4 py-2">
                    <button
                      id="project-14-dropdown-button"
                      type="button"
                      data-dropdown-toggle="project-14-dropdown"
                      className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="4"
                          d="M6 12h0m6 0h0m6 0h0"
                        />
                      </svg>
                    </button>
                    <div
                      id="project-14-dropdown"
                      className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                        aria-labelledby="project-14-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            id="editProjectButton"
                            data-modal-target="editProjectModal"
                            data-modal-toggle="editProjectModal"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <a
                            href="../project-summary"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            View
                          </a>
                        </li>
                      </ul>
                      <div className="p-2">
                        <button
                          type="button"
                          id="deleteProjectButton"
                          data-modal-target="deleteProjectModal"
                          data-modal-toggle="deleteProjectModal"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                        >
                          <svg
                            className="me-1.5 h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 border-gray-200">
                  <td className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()}
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                  >
                    <a
                      href="../project-summary"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      Implement GPT 3
                    </a>
                  </th>
                  <td className="whitespace-nowrap px-4 py-2">
                    <span className="rounded-sm bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                      In progress
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <img
                        src="/images/users/avatar-10.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-1.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <img
                        src="/images/users/avatar-5.png"
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                      />
                      <a
                        href="#"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                      >
                        +2
                      </a>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        25%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-1.5 rounded-full bg-primary-600"
                        style={{ width: '25%' }}
                      ></div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    <span className="me-2 rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      None
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white">
                    <div className="inline-flex items-center rounded-lg border bg-white py-1 pe-1 ps-2 text-xs font-medium dark:border-gray-600 dark:bg-gray-700 border-gray-200">
                      <svg
                        className="me-1.5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="text-green-500">3:11</span>
                      /8:00
                      <button className="ml-3 rounded-md bg-orange-500 p-1 text-white hover:bg-orange-700">
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8Zm7 0a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">
                    Today
                  </td>
                  <td className="px-4 py-2">
                    <button
                      id="project-15-dropdown-button"
                      type="button"
                      data-dropdown-toggle="project-15-dropdown"
                      className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="4"
                          d="M6 12h0m6 0h0m6 0h0"
                        />
                      </svg>
                    </button>
                    <div
                      id="project-15-dropdown"
                      className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                        aria-labelledby="project-15-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            id="editProjectButton"
                            data-modal-target="editProjectModal"
                            data-modal-toggle="editProjectModal"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>
                        <li>
                          <a
                            href="../project-summary"
                            className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              className="me-1.5 h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            View
                          </a>
                        </li>
                      </ul>
                      <div className="p-2">
                        <button
                          type="button"
                          id="deleteProjectButton"
                          data-modal-target="deleteProjectModal"
                          data-modal-toggle="deleteProjectModal"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                        >
                          <svg
                            className="me-1.5 h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full">
            {/* Table Footer */}
            <div className="relative overflow-hidden">
              <nav
                className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
                aria-label="Table navigation"
              >
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Showing{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    1-15
                  </span>{' '}
                  of{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    146
                  </span>
                </span>
                <ul className="inline-flex items-stretch -space-x-px">
                  <li>
                    <a
                      href="#"
                      className="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="z-10 flex items-center justify-center border border-primary-300 bg-primary-50 px-3 py-2 text-sm leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      ...
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      10
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
