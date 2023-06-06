<template>
    <ul class="dropdown-menu dropdown-menu-end show" aria-labelledby="dropdownMenuUserOptions" style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(1.52588e-05px, 39px);" data-popper-placement="bottom-end">
        <li>
            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#setUserNicknameModal" onclick="getsetnametag('0x7e2f6e2f86089ae708425bca2e7bf43ad5ca486e')">
            <i class="bi-tag me-1"></i> Set Nickname
            </a>
        </li>
        <li>
            <a class="dropdown-item" href="#" onclick="pinchat('0x7e2f6e2f86089ae708425bca2e7bf43ad5ca486e','pin')" id="pin_0x7e2f6e2f86089ae708425bca2e7bf43ad5ca486e">
            <i class="bi bi-pin-angle-fill text-muted me-1"></i> Pin Chat
            </a>
        </li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li>
            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#archiveUserModal" onclick="getsetarchiveuser('0x7e2f6e2f86089ae708425bca2e7bf43ad5ca486e')">
            <i class="bi bi-door-closed me-1"></i> Archive Chat
            </a>
        </li>
        <li>
            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#blockUserModal" onclick="getsetblockuser('0x7e2f6e2f86089ae708425bca2e7bf43ad5ca486e')">
            <i class="bi bi-slash-circle me-1"></i> Block User
            </a>
        </li>
        <li id="reportUserid_0x7e2f6e2f86089ae708425bca2e7bf43ad5ca486e">
            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#reportUserModal" onclick="getsetblockuser('0x7e2f6e2f86089ae708425bca2e7bf43ad5ca486e')">
            <i class="bi bi-exclamation-octagon me-1"></i> Report Spam
            </a>
        </li>
    </ul>

</template>